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
        _fun93405: for (var _fun93405_ip = 0;;) switch (_fun93405_ip) {
            case 0:
                var3 = arguments[1];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun93405_ip = 37;
                    continue _fun93405
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
                    _fun93405_ip = 62;
                    continue _fun93405
                }
            case 59:
                var4 = var6;
            case 62:
                var _closure2_slot0 = var4;
                var4 = undefined;
                if (var3) {
                    _fun93405_ip = 96;
                    continue _fun93405
                }
            case 71:
                var6 = var5().value;
                var5 = var1;
                var5 = var5 === var2;
                var4 = undefined;
                var3 = var5;
                if (var5) {
                    _fun93405_ip = 96;
                    continue _fun93405
                }
            case 90:
                var4 = var6;
                var3 = var5;
            case 96:
                var _closure2_slot1 = var4;
                if (var3) {
                    _fun93405_ip = 106;
                    continue _fun93405
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
                    _fun93410: for (var _fun93410_ip = 0;;) switch (_fun93410_ip) {
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
                                _fun93410_ip = 32;
                                continue _fun93410
                            }
                        case 29:
                            var3 = var6;
                        case 32:
                            var3 = undefined;
                            var6 = var2;
                            if (var6) {
                                _fun93410_ip = 60;
                                continue _fun93410
                            }
                        case 40:
                            var5 = var5().value;
                            var6 = var1;
                            var6 = var6 === var7;
                            var2 = var6;
                            if (var6) {
                                _fun93410_ip = 60;
                                continue _fun93410
                            }
                        case 57:
                            var3 = var5;
                        case 60:
                            var4 = var3;
                            var3 = var2;
                            if (var3) {
                                _fun93410_ip = 72;
                                continue _fun93410
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
                                _fun93410_ip = 130;
                                continue _fun93410
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
                                _fun93410_ip = 140;
                                continue _fun93410
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
                        _fun93407: for (var _fun93407_ip = 0;;) switch (_fun93407_ip) {
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
                                    _fun93407_ip = 27;
                                    continue _fun93407
                                }
                            case 24:
                                var4 = var0;
                            case 27:
                                var0 = undefined;
                                if (var2) {
                                    _fun93407_ip = 57;
                                    continue _fun93407
                                }
                            case 32:
                                var5 = var3().value;
                                var3 = var1;
                                var3 = var3 === var6;
                                var0 = undefined;
                                var2 = var3;
                                if (var3) {
                                    _fun93407_ip = 57;
                                    continue _fun93407
                                }
                            case 51:
                                var0 = var5;
                                var2 = var3;
                            case 57:
                                if (var2) {
                                    _fun93407_ip = 63;
                                    continue _fun93407
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
        _fun93411: for (var _fun93411_ip = 0;;) switch (_fun93411_ip) {
            case 0:
                var2 = arg0;
                var3 = arguments[1];
                var7 = undefined;
                if (!(var3 === var7)) {
                    _fun93411_ip = 40;
                    continue _fun93411
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
                    _fun93411_ip = 65;
                    continue _fun93411
                }
            case 62:
                var4 = var6;
            case 65:
                var _closure2_slot0 = var4;
                var4 = undefined;
                if (var3) {
                    _fun93411_ip = 99;
                    continue _fun93411
                }
            case 74:
                var6 = var5().value;
                var5 = var1;
                var5 = var5 === var7;
                var4 = undefined;
                var3 = var5;
                if (var5) {
                    _fun93411_ip = 99;
                    continue _fun93411
                }
            case 93:
                var4 = var6;
                var3 = var5;
            case 99:
                var _closure2_slot1 = var4;
                if (var3) {
                    _fun93411_ip = 109;
                    continue _fun93411
                }
            case 106:
                var1.return();
            case 109:
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    _fun93412: for (var _fun93412_ip = 0;;) switch (_fun93412_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot0;
                            var0 = var2.isMessageRequest;
                            var0 = var0.bind(var2)(var3);
                            var0 = !var0;
                            if (!var0) {
                                _fun93412_ip = 45;
                                continue _fun93412
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
        _fun93413: for (var _fun93413_ip = 0;;) switch (_fun93413_ip) {
            case 0:
                var3 = arg0;
                var1 = arguments[1];
                var7 = undefined;
                if (!(var1 === var7)) {
                    _fun93413_ip = 38;
                    continue _fun93413
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
                    _fun93413_ip = 63;
                    continue _fun93413
                }
            case 60:
                var1 = var2;
            case 63:
                var2 = undefined;
                if (var4) {
                    _fun93413_ip = 93;
                    continue _fun93413
                }
            case 68:
                var6 = var5().value;
                var5 = var0;
                var5 = var5 === var7;
                var2 = undefined;
                var4 = var5;
                if (var5) {
                    _fun93413_ip = 93;
                    continue _fun93413
                }
            case 87:
                var2 = var6;
                var4 = var5;
            case 93:
                if (var4) {
                    _fun93413_ip = 99;
                    continue _fun93413
                }
            case 96:
                var0.return();
            case 99:
                var0 = var1.isMessageRequest;
                var0 = var0.bind(var1)(var3);
                if (var0) {
                    _fun93413_ip = 124;
                    continue _fun93413
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
        _fun93414: for (var _fun93414_ip = 0;;) switch (_fun93414_ip) {
            case 0:
                var1 = arguments[0];
                var6 = undefined;
                if (!(var1 === var6)) {
                    _fun93414_ip = 35;
                    continue _fun93414
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
                    _fun93414_ip = 60;
                    continue _fun93414
                }
            case 57:
                var1 = var2;
            case 60:
                var2 = undefined;
                if (var3) {
                    _fun93414_ip = 90;
                    continue _fun93414
                }
            case 65:
                var5 = var4().value;
                var4 = var0;
                var4 = var4 === var6;
                var2 = undefined;
                var3 = var4;
                if (var4) {
                    _fun93414_ip = 90;
                    continue _fun93414
                }
            case 84:
                var2 = var5;
                var3 = var4;
            case 90:
                if (var3) {
                    _fun93414_ip = 96;
                    continue _fun93414
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
                    _fun93414_ip = 129;
                    continue _fun93414
                }
            case 125:
                var0 = var2 > var1;
            case 129:
                return var0;
        }
    };
    var2.shouldShowMessageRequests = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3923, 3928, 21, 2]);