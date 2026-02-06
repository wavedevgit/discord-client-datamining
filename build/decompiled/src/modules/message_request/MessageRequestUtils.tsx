// modules/message_request/MessageRequestUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
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
    var3 = 3;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/message_request/MessageRequestUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun93492: for (var _fun93492_ip = 0;;) switch (_fun93492_ip) {
            case 0:
                var3 = arguments[1];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun93492_ip = 37;
                    continue _fun93492
                }
            case 11:
                var5 = _closure1_slot2;
                var1 = new Array(2);
                var1[0] = var5;
                var4 = _closure1_slot3;
                var1[1] = var4;
                var3 = var1;
            case 37:
                var5 = var3;
                var1 = var5[Symbol.iterator];
                var5 = var1().next;
                var6 = var5().value;
                var3 = var1;
                var3 = var3 === var2;
                var4 = undefined;
                if (var3) {
                    _fun93492_ip = 62;
                    continue _fun93492
                }
            case 59:
                var4 = var6;
            case 62:
                var _closure2_slot0 = var4;
                var4 = undefined;
                if (var3) {
                    _fun93492_ip = 96;
                    continue _fun93492
                }
            case 71:
                var6 = var5().value;
                var5 = var1;
                var5 = var5 === var2;
                var4 = undefined;
                var3 = var5;
                if (var5) {
                    _fun93492_ip = 96;
                    continue _fun93492
                }
            case 90:
                var4 = var6;
                var3 = var5;
            case 96:
                var _closure2_slot1 = var4;
                if (var3) {
                    _fun93492_ip = 106;
                    continue _fun93492
                }
            case 103:
                var1.return();
            case 106:
                var3 = function arg0() {
                    var3 = arg0;
                    var _closure3_slot0 = var3;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.keys;
                    var2 = var1.bind(var2)(var3);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var2 = arg0;
                        var0 = new Array(2);
                        var0[0] = var2;
                        var1 = _closure3_slot0;
                        var1 = var1[var2];
                        var0[1] = var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = arg0;
                var4 = var3.bind(var2)(var1);
                var3 = var4.filter;
                var1 = function(arg0) { // Environment: var0
                    _fun93497: for (var _fun93497_ip = 0;;) switch (_fun93497_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = var5[Symbol.iterator];
                            var5 = var1().next;
                            var7 = undefined;
                            var2 = undefined;
                            var3 = undefined;
                            var6 = var5().value;
                            var8 = var1;
                            var8 = var8 === var7;
                            var2 = var8;
                            if (var8) {
                                _fun93497_ip = 32;
                                continue _fun93497
                            }
                        case 29:
                            var3 = var6;
                        case 32:
                            var3 = undefined;
                            var6 = var2;
                            if (var6) {
                                _fun93497_ip = 60;
                                continue _fun93497
                            }
                        case 40:
                            var5 = var5().value;
                            var6 = var1;
                            var6 = var6 === var7;
                            var2 = var6;
                            if (var6) {
                                _fun93497_ip = 60;
                                continue _fun93497
                            }
                        case 57:
                            var3 = var5;
                        case 60:
                            var4 = var3;
                            var3 = var2;
                            if (var3) {
                                _fun93497_ip = 72;
                                continue _fun93497
                            }
                        case 69:
                            var1.return();
                        case 72:
                            var8 = _closure2_slot0;
                            var7 = var8.isMessageRequest;
                            var6 = var4;
                            var6 = var6.id;
                            var6 = var7.bind(var8)(var6);
                            var6 = !var6;
                            var3 = var6;
                            if (!var6) {
                                _fun93497_ip = 130;
                                continue _fun93497
                            }
                        case 107:
                            var6 = _closure2_slot1;
                            var5 = var6.isSpam;
                            var4 = var4.id;
                            var4 = var5.bind(var6)(var4);
                            var3 = !var4;
                        case 130:
                            return var3;
                        case 132:
                            CatchBlockStart(arg_register = 0);
                            if (var2) {
                                _fun93497_ip = 140;
                                continue _fun93497
                            }
                        case 137:
                            var1.return();
                        case 140:
                            throw var0;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var0 = function arg0() {
                    var0 = global;
                    var2 = var0.Array;
                    var1 = var2.from;
                    var0 = arg0;
                    var3 = var1.bind(var2)(var0);
                    var2 = var3.reduce;
                    var1 = function(arg0, arg1) { // Environment: var0
                        _fun93494: for (var _fun93494_ip = 0;;) switch (_fun93494_ip) {
                            case 0:
                                var3 = arg1;
                                var1 = var3[Symbol.iterator];
                                var3 = var1().next;
                                var0 = var3().value;
                                var2 = var1;
                                var6 = undefined;
                                var2 = var2 === var6;
                                var4 = undefined;
                                if (var2) {
                                    _fun93494_ip = 27;
                                    continue _fun93494
                                }
                            case 24:
                                var4 = var0;
                            case 27:
                                var0 = undefined;
                                if (var2) {
                                    _fun93494_ip = 57;
                                    continue _fun93494
                                }
                            case 32:
                                var5 = var3().value;
                                var3 = var1;
                                var3 = var3 === var6;
                                var0 = undefined;
                                var2 = var3;
                                if (var3) {
                                    _fun93494_ip = 57;
                                    continue _fun93494
                                }
                            case 51:
                                var0 = var5;
                                var2 = var3;
                            case 57:
                                if (var2) {
                                    _fun93494_ip = 63;
                                    continue _fun93494
                                }
                            case 60:
                                var1.return();
                            case 63:
                                var1 = global;
                                var3 = var1.Object;
                                var2 = var3.assign;
                                var1 = {};
                                var1[var4] = var0;
                                var0 = arg0;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                        }
                    };
                    var0 = {};
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var0.bind(var2)(var1);
                return var0;
        }
    };
    var2.filterOutMessageRequestsAndSpam = var3;
    var3 = function arg0() {
        _fun93498: for (var _fun93498_ip = 0;;) switch (_fun93498_ip) {
            case 0:
                var2 = arg0;
                var3 = arguments[1];
                var7 = undefined;
                if (!(var3 === var7)) {
                    _fun93498_ip = 40;
                    continue _fun93498
                }
            case 14:
                var5 = _closure1_slot2;
                var1 = new Array(2);
                var1[0] = var5;
                var4 = _closure1_slot3;
                var1[1] = var4;
                var3 = var1;
            case 40:
                var5 = var3;
                var1 = var5[Symbol.iterator];
                var5 = var1().next;
                var6 = var5().value;
                var3 = var1;
                var3 = var3 === var7;
                var4 = undefined;
                if (var3) {
                    _fun93498_ip = 65;
                    continue _fun93498
                }
            case 62:
                var4 = var6;
            case 65:
                var _closure2_slot0 = var4;
                var4 = undefined;
                if (var3) {
                    _fun93498_ip = 99;
                    continue _fun93498
                }
            case 74:
                var6 = var5().value;
                var5 = var1;
                var5 = var5 === var7;
                var4 = undefined;
                var3 = var5;
                if (var5) {
                    _fun93498_ip = 99;
                    continue _fun93498
                }
            case 93:
                var4 = var6;
                var3 = var5;
            case 99:
                var _closure2_slot1 = var4;
                if (var3) {
                    _fun93498_ip = 109;
                    continue _fun93498
                }
            case 106:
                var1.return();
            case 109:
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    _fun93499: for (var _fun93499_ip = 0;;) switch (_fun93499_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot0;
                            var0 = var2.isMessageRequest;
                            var0 = var0.bind(var2)(var3);
                            var0 = !var0;
                            if (!var0) {
                                _fun93499_ip = 45;
                                continue _fun93499
                            }
                        case 27:
                            var2 = _closure2_slot1;
                            var1 = var2.isSpam;
                            var1 = var1.bind(var2)(var3);
                            var0 = !var1;
                        case 45:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.filterOutMessageRequestsAndSpamById = var3;
    var3 = function arg0() {
        _fun93500: for (var _fun93500_ip = 0;;) switch (_fun93500_ip) {
            case 0:
                var3 = arg0;
                var1 = arguments[1];
                var7 = undefined;
                if (!(var1 === var7)) {
                    _fun93500_ip = 38;
                    continue _fun93500
                }
            case 12:
                var4 = _closure1_slot2;
                var0 = new Array(2);
                var0[0] = var4;
                var2 = _closure1_slot3;
                var0[1] = var2;
                var1 = var0;
            case 38:
                var5 = var1;
                var0 = var5[Symbol.iterator];
                var5 = var0().next;
                var2 = var5().value;
                var1 = var0;
                var4 = var1 === var7;
                var1 = undefined;
                if (var4) {
                    _fun93500_ip = 63;
                    continue _fun93500
                }
            case 60:
                var1 = var2;
            case 63:
                var2 = undefined;
                if (var4) {
                    _fun93500_ip = 93;
                    continue _fun93500
                }
            case 68:
                var6 = var5().value;
                var5 = var0;
                var5 = var5 === var7;
                var2 = undefined;
                var4 = var5;
                if (var5) {
                    _fun93500_ip = 93;
                    continue _fun93500
                }
            case 87:
                var2 = var6;
                var4 = var5;
            case 93:
                if (var4) {
                    _fun93500_ip = 99;
                    continue _fun93500
                }
            case 96:
                var0.return();
            case 99:
                var0 = var1.isMessageRequest;
                var0 = var0.bind(var1)(var3);
                if (var0) {
                    _fun93500_ip = 124;
                    continue _fun93500
                }
            case 113:
                var1 = var2.isSpam;
                var0 = var1.bind(var2)(var3);
            case 124:
                return var0;
        }
    };
    var2.isMessageRequestOrSpamRequest = var3;
    var1 = function() {
        _fun93501: for (var _fun93501_ip = 0;;) switch (_fun93501_ip) {
            case 0:
                var1 = arguments[0];
                var6 = undefined;
                if (!(var1 === var6)) {
                    _fun93501_ip = 35;
                    continue _fun93501
                }
            case 9:
                var3 = _closure1_slot2;
                var0 = new Array(2);
                var0[0] = var3;
                var2 = _closure1_slot3;
                var0[1] = var2;
                var1 = var0;
            case 35:
                var4 = var1;
                var0 = var4[Symbol.iterator];
                var4 = var0().next;
                var2 = var4().value;
                var1 = var0;
                var3 = var1 === var6;
                var1 = undefined;
                if (var3) {
                    _fun93501_ip = 60;
                    continue _fun93501
                }
            case 57:
                var1 = var2;
            case 60:
                var2 = undefined;
                if (var3) {
                    _fun93501_ip = 90;
                    continue _fun93501
                }
            case 65:
                var5 = var4().value;
                var4 = var0;
                var4 = var4 === var6;
                var2 = undefined;
                var3 = var4;
                if (var4) {
                    _fun93501_ip = 90;
                    continue _fun93501
                }
            case 84:
                var2 = var5;
                var3 = var4;
            case 90:
                if (var3) {
                    _fun93501_ip = 96;
                    continue _fun93501
                }
            case 93:
                var0.return();
            case 96:
                var0 = var2.getSpamChannelsCount;
                var2 = var0.bind(var2)();
                var0 = var1.getMessageRequestsCount;
                var0 = var0.bind(var1)();
                var1 = 0;
                var0 = var0 > var1;
                if (var0) {
                    _fun93501_ip = 129;
                    continue _fun93501
                }
            case 125:
                var0 = var2 > var1;
            case 129:
                return var0;
        }
    };
    var2.shouldShowMessageRequests = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3964, 3969, 21, 2]);