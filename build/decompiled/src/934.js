// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var3 = function arg0() {
        _fun9728: for (var _fun9728_ip = 0;;) switch (_fun9728_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.onerror;
                if (!var0) {
                    _fun9728_ip = 61;
                    continue _fun9728
                }
            case 12:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.fill;
                var1 = 'onerror';
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var0 = function(arg0) { // Environment: var0
                        _fun9730: for (var _fun9730_ip = 0;;) switch (_fun9730_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = var3;
                            case 6: // try_start_0
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 9;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var4.bind(var1)(var2);
                                var2 = var4.captureError;
                                var1 = var0;
                                var0 = 'transport';
                                var0 = var2.bind(var4)(var1, var0);
                            case 50: // try_end0
                                _fun9730_ip = 54;
                                continue _fun9730;
                            case 52: // catch_target0
                                CatchBlockStart(arg_register = 0);
                            case 54:
                                var2 = _closure3_slot0;
                                var1 = var2.call;
                                var0 = this;
                                var0 = var1.bind(var2)(var0, var3);
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var3)(var4, var1, var0);
            case 61:
                var0 = undefined;
                return var0;
        }
    };
    var2.wrapTransportError = var3;
    var3 = function arg0() {
        _fun9731: for (var _fun9731_ip = 0;;) switch (_fun9731_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.onclose;
                if (!var0) {
                    _fun9731_ip = 61;
                    continue _fun9731
                }
            case 12:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.fill;
                var1 = 'onclose';
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        _fun9733: for (var _fun9733_ip = 0;;) switch (_fun9733_ip) {
                            case 0:
                                var0 = this;
                                var4 = undefined;
                                var3 = undefined;
                                var2 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var1 = 8;
                                var1 = var5[var1];
                                var6 = var2.bind(var4)(var1);
                                var1 = var6.cleanupPendingSpansForTransport;
                                var1 = var1.bind(var6)(var0);
                                var1 = 4;
                                var1 = var5[var1];
                                var2 = var2.bind(var4)(var1);
                                var1 = var2.cleanupSessionDataForTransport;
                                var1 = var1.bind(var2)(var0);
                                var2 = arguments.length;
                                var1 = global;
                                var1 = var1.Array;
                                var4 = var1.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var1
                                    }
                                });
                                var9 = var4;
                                var8 = var2;
                                var1 = new var9[var1](var8, var7);
                                var5 = var1 instanceof Object ? var1 : var4;
                                var1 = 0;
                                var4 = var1 < var2;
                                if (!var4) {
                                    _fun9733_ip = 121;
                                    continue _fun9733
                                }
                            case 106:
                                var4 = arguments[var1];
                                var5[var1] = var4;
                                var1 = var1 + 1;
                                if (var1 < var2) {
                                    _fun9733_ip = 106;
                                    continue _fun9733
                                }
                            case 121:
                                var3 = _closure3_slot0;
                                var2 = var3.call;
                                var1 = var2.apply;
                                var4 = new Array(1);
                                var4[0] = var0;
                                var0 = var4.concat;
                                var0 = var0.bind(var4)(var5);
                                var0 = var1.bind(var2)(var3, var0);
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var3)(var4, var1, var0);
            case 61:
                var0 = undefined;
                return var0;
        }
    };
    var2.wrapTransportOnClose = var3;
    var3 = function arg0() {
        _fun9734: for (var _fun9734_ip = 0;;) switch (_fun9734_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.onmessage;
                if (!var0) {
                    _fun9734_ip = 61;
                    continue _fun9734
                }
            case 12:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.fill;
                var1 = 'onmessage';
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun9736: for (var _fun9736_ip = 0;;) switch (_fun9736_ip) {
                            case 0:
                                var8 = arg0;
                                var10 = arg1;
                                var6 = this;
                                var2 = var8;
                                var _closure4_slot0 = var8;
                                var _closure4_slot1 = var10;
                                var _closure4_slot2 = var6;
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var7 = 2;
                                var3 = var3[var7];
                                var4 = undefined;
                                var5 = var5.bind(var4)(var3);
                                var3 = var5.isJsonRpcRequest;
                                var3 = var3.bind(var5)(var8);
                                if (var3) {
                                    _fun9736_ip = 171;
                                    continue _fun9736
                                }
                            case 64:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var3 = var3[var7];
                                var7 = var5.bind(var4)(var3);
                                var5 = var7.isJsonRpcNotification;
                                var3 = var2;
                                var3 = var5.bind(var7)(var3);
                                if (var3) {
                                    _fun9736_ip = 122;
                                    continue _fun9736
                                }
                            case 98:
                                var7 = _closure3_slot0;
                                var5 = var7.call;
                                var3 = var2;
                                var3 = var5.bind(var7)(var6, var3, var10);
                                _fun9736_ip = 169;
                                continue _fun9736;
                            case 122:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot1;
                                var5 = 6;
                                var5 = var8[var5];
                                var9 = var7.bind(var4)(var5);
                                var8 = var9.createMcpNotificationSpan;
                                var14 = var2;
                                var11 = function() { // Environment: var0
                                    var4 = _closure3_slot0;
                                    var3 = var4.call;
                                    var2 = _closure4_slot2;
                                    var1 = _closure4_slot0;
                                    var0 = _closure4_slot1;
                                    var0 = var3.bind(var4)(var2, var1, var0);
                                    return var0;
                                };
                                var15 = var9;
                                var13 = var6;
                                var12 = var10;
                                var3 = var15[var8](var14, var13, var12, var11, var10);
                            case 169:
                                return var3;
                            case 171:
                                var3 = var2;
                                var5 = var3.method;
                                var3 = 'initialize';
                                if (!(var3 === var5)) {
                                    _fun9736_ip = 247;
                                    continue _fun9736
                                }
                            case 188: // try_start_0
                                var3 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var5 = 3;
                                var5 = var7[var5];
                                var8 = var3.bind(var4)(var5);
                                var5 = var8.extractSessionDataFromInitializeRequest;
                                var5 = var5.bind(var8)(var2);
                                var2 = 4;
                                var2 = var7[var2];
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.storeSessionDataForTransport;
                                var2 = var2.bind(var3)(var6, var5);
                            case 243: // try_end0
                                _fun9736_ip = 247;
                                continue _fun9736;
                            case 245: // catch_target0
                                CatchBlockStart(arg_register = 2);
                            case 247:
                                var2 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var1 = 5;
                                var3 = var5[var1];
                                var6 = var2.bind(var4)(var3);
                                var3 = var6.getIsolationScope;
                                var6 = var3.bind(var6)();
                                var3 = var6.clone;
                                var3 = var3.bind(var6)();
                                var1 = var5[var1];
                                var2 = var2.bind(var4)(var1);
                                var1 = var2.withIsolationScope;
                                var0 = function() { // Environment: var0
                                    var2 = _closure1_slot0;
                                    var4 = _closure1_slot1;
                                    var0 = 6;
                                    var0 = var4[var0];
                                    var1 = undefined;
                                    var6 = var2.bind(var1)(var0);
                                    var3 = var6.buildMcpServerSpanConfig;
                                    var5 = _closure4_slot0;
                                    var9 = _closure4_slot2;
                                    var0 = _closure4_slot1;
                                    var7 = var3.bind(var6)(var5, var9, var0);
                                    var0 = 7;
                                    var3 = var4[var0];
                                    var6 = var2.bind(var1)(var3);
                                    var3 = var6.startInactiveSpan;
                                    var3 = var3.bind(var6)(var7);
                                    var6 = 8;
                                    var6 = var4[var6];
                                    var8 = var2.bind(var1)(var6);
                                    var7 = var8.storeSpanForRequest;
                                    var12 = var5.id;
                                    var10 = var5.method;
                                    var14 = var8;
                                    var13 = var9;
                                    var11 = var3;
                                    var5 = var14[var7](var13, var12, var11, var10, var9);
                                    var0 = var4[var0];
                                    var2 = var2.bind(var1)(var0);
                                    var1 = var2.withActiveSpan;
                                    var0 = function() { // Environment: var0
                                        var4 = _closure3_slot0;
                                        var3 = var4.call;
                                        var2 = _closure4_slot2;
                                        var1 = _closure4_slot0;
                                        var0 = _closure4_slot1;
                                        var0 = var3.bind(var4)(var2, var1, var0);
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var3, var0);
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var3, var0);
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var3)(var4, var1, var0);
            case 61:
                var0 = undefined;
                return var0;
        }
    };
    var2.wrapTransportOnMessage = var3;
    var1 = function arg0() {
        _fun9740: for (var _fun9740_ip = 0;;) switch (_fun9740_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.send;
                if (!var0) {
                    _fun9740_ip = 61;
                    continue _fun9740
                }
            case 12:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.fill;
                var1 = 'send';
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = _closure1_slot2;
                    var1 = undefined;
                    var0 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun9743: for (var _fun9743_ip = 0;;) switch (_fun9743_ip) {
                                case 0:
                                    StartGenerator();
                                    var5 = this;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun9743_ip = 721;
                                        continue _fun9743
                                    }
                                case 14:
                                    var6 = undefined;
                                    var9 = undefined;
                                    var _closure5_slot1 = var6;
                                    var2 = undefined;
                                    var _closure5_slot0 = var5;
                                    var7 = arguments.length;
                                    var8 = global;
                                    var3 = var8.Array;
                                    var4 = var3.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var18 = var4;
                                    var17 = var7;
                                    var3 = new var18[var3](var17, var16);
                                    var12 = var3 instanceof Object ? var3 : var4;
                                    _closure5_slot1 = var12;
                                    var3 = 0;
                                    var10 = var3 < var7;
                                    var4 = 0;
                                    if (!var10) {
                                        _fun9743_ip = 92;
                                        continue _fun9743
                                    }
                                case 77:
                                    var10 = arguments[var4];
                                    var12[var4] = var10;
                                    var4 = var4 + 1;
                                    if (var4 < var7) {
                                        _fun9743_ip = 77;
                                        continue _fun9743
                                    }
                                case 92:
                                    var9 = var12[var3];
                                    var2 = var9;
                                    var7 = _closure1_slot0;
                                    var4 = _closure1_slot1;
                                    var10 = 2;
                                    var4 = var4[var10];
                                    var7 = var7.bind(var6)(var4);
                                    var4 = var7.isJsonRpcNotification;
                                    var9 = var4.bind(var7)(var9);
                                    var4 = _closure1_slot0;
                                    var7 = _closure1_slot1;
                                    if (var9) {
                                        _fun9743_ip = 688;
                                        continue _fun9743
                                    }
                                case 147:
                                    var9 = var7[var10];
                                    var13 = var4.bind(var6)(var9);
                                    var11 = var13.isJsonRpcResponse;
                                    var9 = var2;
                                    var9 = var11.bind(var13)(var9);
                                    if (!var9) {
                                        _fun9743_ip = 644;
                                        continue _fun9743
                                    }
                                case 176:
                                    var9 = var2;
                                    var11 = var9.id;
                                    var9 = null;
                                    if (!(var9 !== var11)) {
                                        _fun9743_ip = 644;
                                        continue _fun9743
                                    }
                                case 193:
                                    var9 = var2;
                                    var9 = var9.id;
                                    if (!(var6 !== var9)) {
                                        _fun9743_ip = 644;
                                        continue _fun9743
                                    }
                                case 208:
                                    var9 = var2;
                                    var9 = var9.error;
                                    if (!var9) {
                                        _fun9743_ip = 453;
                                        continue _fun9743
                                    }
                                case 222:
                                    var9 = var2;
                                    var13 = var9.error;
                                    var11 = var13;
                                    var9 = undefined;
                                case 235: // try_start_0
                                    var13 = var11;
                                    if (!var13) {
                                        _fun9743_ip = 449;
                                        continue _fun9743
                                    }
                                case 244:
                                    var13 = var11;
                                    var14 = 'object';
                                    var13 = typeof var13;
                                    if (!(var14 === var13)) {
                                        _fun9743_ip = 449;
                                        continue _fun9743
                                    }
                                case 261:
                                    var14 = var11;
                                    var13 = 'code';
                                    var13 = var13 in var14;
                                    if (!var13) {
                                        _fun9743_ip = 449;
                                        continue _fun9743
                                    }
                                case 278:
                                    var14 = var11;
                                    var13 = 'message';
                                    var13 = var13 in var14;
                                    if (!var13) {
                                        _fun9743_ip = 449;
                                        continue _fun9743
                                    }
                                case 295:
                                    var9 = var11;
                                    var13 = var11.code;
                                    var11 = -32603;
                                    if (!(var11 !== var13)) {
                                        _fun9743_ip = 349;
                                        continue _fun9743
                                    }
                                case 313:
                                    var11 = var9;
                                    var13 = var11.code;
                                    var11 = -32099;
                                    if (!(var13 >= var11)) {
                                        _fun9743_ip = 449;
                                        continue _fun9743
                                    }
                                case 331:
                                    var11 = var9;
                                    var13 = var11.code;
                                    var11 = -32000;
                                    if (!(var13 <= var11)) {
                                        _fun9743_ip = 449;
                                        continue _fun9743
                                    }
                                case 349:
                                    var14 = var8.Error;
                                    var17 = var9.message;
                                    var13 = var14.prototype;
                                    var13 = Object.create(var13, {
                                        constructor: {
                                            value: var14
                                        }
                                    });
                                    var18 = var13;
                                    var11 = new var18[var14](var17, var16);
                                    var13 = var11 instanceof Object ? var11 : var13;
                                    var11 = var9.code;
                                    var8 = var8.HermesInternal;
                                    var9 = var8.concat;
                                    var8 = 'JsonRpcError_';
                                    var8 = var9.bind(var8)(var11);
                                    var13.name = var8;
                                    var9 = _closure1_slot0;
                                    var11 = _closure1_slot1;
                                    var8 = 9;
                                    var8 = var11[var8];
                                    var11 = var9.bind(var6)(var8);
                                    var9 = var11.captureError;
                                    var8 = 'protocol';
                                    var8 = var9.bind(var11)(var13, var8);
                                case 449: // try_end0
                                    _fun9743_ip = 453;
                                    continue _fun9743;
                                case 451: // catch_target0
                                    CatchBlockStart(arg_register = 8);
                                case 453:
                                    var9 = _closure1_slot0;
                                    var8 = _closure1_slot1;
                                    var8 = var8[var10];
                                    var10 = var9.bind(var6)(var8);
                                    var9 = var10.isValidContentItem;
                                    var8 = var2;
                                    var8 = var8.result;
                                    var8 = var9.bind(var10)(var8);
                                    if (!var8) {
                                        _fun9743_ip = 597;
                                        continue _fun9743
                                    }
                                case 493:
                                    var8 = var2;
                                    var8 = var8.result;
                                    var8 = var8.protocolVersion;
                                    if (var8) {
                                        _fun9743_ip = 529;
                                        continue _fun9743
                                    }
                                case 511:
                                    var8 = var2;
                                    var8 = var8.result;
                                    var8 = var8.serverInfo;
                                    if (!var8) {
                                        _fun9743_ip = 597;
                                        continue _fun9743
                                    }
                                case 529: // try_start_1
                                    var9 = _closure1_slot0;
                                    var11 = _closure1_slot1;
                                    var8 = 3;
                                    var8 = var11[var8];
                                    var13 = var9.bind(var6)(var8);
                                    var10 = var13.extractSessionDataFromInitializeResponse;
                                    var8 = var2;
                                    var8 = var8.result;
                                    var10 = var10.bind(var13)(var8);
                                    var8 = 4;
                                    var8 = var11[var8];
                                    var9 = var9.bind(var6)(var8);
                                    var8 = var9.updateSessionDataForTransport;
                                    var8 = var8.bind(var9)(var5, var10);
                                case 593: // try_end1
                                    _fun9743_ip = 597;
                                    continue _fun9743;
                                case 595: // catch_target1
                                    CatchBlockStart(arg_register = 8);
                                case 597:
                                    var8 = _closure1_slot0;
                                    var9 = _closure1_slot1;
                                    var3 = 8;
                                    var3 = var9[var3];
                                    var10 = var8.bind(var6)(var3);
                                    var9 = var10.completeSpanWithResults;
                                    var3 = var2;
                                    var8 = var3.id;
                                    var3 = var3.result;
                                    var3 = var9.bind(var10)(var5, var8, var3);
                                case 644:
                                    var10 = _closure3_slot0;
                                    var9 = var10.call;
                                    var8 = var9.apply;
                                    var11 = new Array(1);
                                    var11[0] = var5;
                                    var3 = var11.concat;
                                    var3 = var3.bind(var11)(var12);
                                    var3 = var8.bind(var9)(var10, var3);
                                    return var3;
                                case 688:
                                    var3 = 6;
                                    var3 = var7[var3];
                                    var4 = var4.bind(var6)(var3);
                                    var3 = var4.createMcpOutgoingNotificationSpan;
                                    var1 = function() { // Environment: var1
                                        var3 = _closure3_slot0;
                                        var2 = var3.call;
                                        var1 = var2.apply;
                                        var4 = _closure5_slot0;
                                        var5 = new Array(1);
                                        var5[0] = var4;
                                        var4 = var5.concat;
                                        var0 = _closure5_slot1;
                                        var0 = var4.bind(var5)(var0);
                                        var0 = var1.bind(var2)(var3, var0);
                                        return var0;
                                    };
                                    var1 = var3.bind(var4)(var2, var5, var1);
                                    return var1;
                                case 721:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var4, var1, var0);
            case 61:
                var0 = undefined;
                return var0;
        }
    };
    var2.wrapTransportSend = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 822, 933, 935, 936, 847, 938, 864, 942, 944]);