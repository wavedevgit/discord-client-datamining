// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var4 = function(arg0, arg1) { // Original name: captureCheckIn, environment: var1
        _fun9140: for (var _fun9140_ip = 0;;) switch (_fun9140_ip) {
            case 0:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var4 = var5[var1];
                var2 = undefined;
                var6 = var3.bind(var2)(var4);
                var4 = var6.getCurrentScope;
                var4 = var4.bind(var6)();
                var1 = var5[var1];
                var3 = var3.bind(var2)(var1);
                var1 = var3.getClient;
                var3 = var1.bind(var3)();
                if (var3) {
                    _fun9140_ip = 133;
                    continue _fun9140
                }
            case 57:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 3;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.DEBUG_BUILD;
                if (!var1) {
                    _fun9140_ip = 213;
                    continue _fun9140
                }
            case 89:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 4;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var6 = var1.debug;
                var5 = var6.warn;
                var1 = 'Cannot capture check-in. No client defined.';
                var1 = var5.bind(var6)(var1);
                _fun9140_ip = 213;
                continue _fun9140;
            case 133:
                var1 = var3.captureCheckIn;
                if (var1) {
                    _fun9140_ip = 245;
                    continue _fun9140
                }
            case 142:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 3;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.DEBUG_BUILD;
                if (!var1) {
                    _fun9140_ip = 213;
                    continue _fun9140
                }
            case 171:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 4;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var6 = var1.debug;
                var5 = var6.warn;
                var1 = 'Cannot capture check-in. Client does not support sending check-ins.';
                var1 = var5.bind(var6)(var1);
            case 213:
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 5;
                var0 = var5[var0];
                var1 = var1.bind(var2)(var0);
                var0 = var1.uuid4;
                var0 = var0.bind(var1)();
                return var0;
            case 245:
                var2 = var3.captureCheckIn;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0, var4);
                return var0;
        }
    };
    var _closure1_slot3 = var4;
    var0 = function() { // Original name: _flush, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun9143: for (var _fun9143_ip = 0;;) switch (_fun9143_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun9143_ip = 159;
                            continue _fun9143
                        }
                    case 10:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 1;
                        var2 = var3[var2];
                        var3 = undefined;
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.getClient;
                        var4 = var2.bind(var4)();
                        if (var4) {
                            _fun9143_ip = 142;
                            continue _fun9143
                        }
                    case 48:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 3;
                        var2 = var6[var2];
                        var2 = var5.bind(var3)(var2);
                        var2 = var2.DEBUG_BUILD;
                        if (!var2) {
                            _fun9143_ip = 119;
                            continue _fun9143
                        }
                    case 77:
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 4;
                        var1 = var5[var1];
                        var1 = var2.bind(var3)(var1);
                        var3 = var1.debug;
                        var2 = var3.warn;
                        var1 = 'Cannot flush events. No client defined.';
                        var1 = var2.bind(var3)(var1);
                    case 119:
                        var1 = global;
                        var3 = var1.Promise;
                        var2 = var3.resolve;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        _fun9143_ip = 156;
                        continue _fun9143;
                    case 142:
                        var3 = var4.flush;
                        var2 = arg0;
                        var1 = var3.bind(var4)(var2);
                    case 156:
                        return var1;
                    case 159:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot4 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = function() { // Original name: _close, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun9146: for (var _fun9146_ip = 0;;) switch (_fun9146_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun9146_ip = 159;
                            continue _fun9146
                        }
                    case 10:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 1;
                        var2 = var3[var2];
                        var3 = undefined;
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.getClient;
                        var4 = var2.bind(var4)();
                        if (var4) {
                            _fun9146_ip = 142;
                            continue _fun9146
                        }
                    case 48:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 3;
                        var2 = var6[var2];
                        var2 = var5.bind(var3)(var2);
                        var2 = var2.DEBUG_BUILD;
                        if (!var2) {
                            _fun9146_ip = 119;
                            continue _fun9146
                        }
                    case 77:
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 4;
                        var1 = var5[var1];
                        var1 = var2.bind(var3)(var1);
                        var3 = var1.debug;
                        var2 = var3.warn;
                        var1 = 'Cannot flush events and disable SDK. No client defined.';
                        var1 = var2.bind(var3)(var1);
                    case 119:
                        var1 = global;
                        var3 = var1.Promise;
                        var2 = var3.resolve;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        _fun9146_ip = 156;
                        continue _fun9146;
                    case 142:
                        var3 = var4.close;
                        var2 = arg0;
                        var1 = var3.bind(var4)(var2);
                    case 156:
                        return var1;
                    case 159:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var3 = function() { // Original name: endSession, environment: var1
        _fun9147: for (var _fun9147_ip = 0;;) switch (_fun9147_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 1;
                var2 = var5[var3];
                var0 = undefined;
                var6 = var4.bind(var0)(var2);
                var2 = var6.getIsolationScope;
                var2 = var2.bind(var6)();
                var3 = var5[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.getCurrentScope;
                var4 = var3.bind(var4)();
                var3 = var4.getSession;
                var5 = var3.bind(var4)();
                if (var5) {
                    _fun9147_ip = 77;
                    continue _fun9147
                }
            case 67:
                var3 = var2.getSession;
                var5 = var3.bind(var2)();
            case 77:
                if (!var5) {
                    _fun9147_ip = 111;
                    continue _fun9147
                }
            case 80:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 9;
                var3 = var6[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.closeSession;
                var3 = var3.bind(var4)(var5);
            case 111:
                var1 = _closure1_slot7;
                var1 = var1.bind(var0)();
                var1 = var2.setSession;
                var1 = var1.bind(var2)();
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = function() { // Original name: _sendSessionUpdate, environment: var1
        _fun9148: for (var _fun9148_ip = 0;;) switch (_fun9148_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var2 = var4[var1];
                var0 = undefined;
                var5 = var3.bind(var0)(var2);
                var2 = var5.getIsolationScope;
                var2 = var2.bind(var5)();
                var1 = var4[var1];
                var3 = var3.bind(var0)(var1);
                var1 = var3.getClient;
                var3 = var1.bind(var3)();
                var1 = var2.getSession;
                var2 = var1.bind(var2)();
                var1 = var2;
                if (!var1) {
                    _fun9148_ip = 73;
                    continue _fun9148
                }
            case 70:
                var1 = var3;
            case 73:
                if (!var1) {
                    _fun9148_ip = 87;
                    continue _fun9148
                }
            case 76:
                var1 = var3.captureSession;
                var1 = var1.bind(var3)(var2);
            case 87:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = 0;
    var5 = var5[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = global;
    var8 = var5.Object;
    var7 = var8.defineProperty;
    var5 = var5.Symbol;
    var6 = var5.toStringTag;
    var5 = {};
    var9 = 'Module';
    var5.value = var9;
    var5 = var7.bind(var8)(var2, var6, var5);
    var5 = function(arg0) { // Original name: addEventProcessor, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getIsolationScope;
        var3 = var1.bind(var2)();
        var2 = var3.addEventProcessor;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.addEventProcessor = var5;
    var2.captureCheckIn = var4;
    var4 = function(arg0, arg1) { // Original name: captureEvent, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.getCurrentScope;
        var3 = var0.bind(var1)();
        var2 = var3.captureEvent;
        var1 = arg0;
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.captureEvent = var4;
    var4 = function(arg0, arg1) { // Original name: captureException, environment: var1
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 1;
        var0 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var0);
        var0 = var2.getCurrentScope;
        var3 = var0.bind(var2)();
        var2 = var3.captureException;
        var0 = 2;
        var0 = var5[var0];
        var4 = var4.bind(var1)(var0);
        var1 = var4.parseEventHintOrCaptureContext;
        var0 = arg1;
        var1 = var1.bind(var4)(var0);
        var0 = arg0;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.captureException = var4;
    var4 = function(arg0, arg1) { // Original name: captureMessage, environment: var1
        _fun9152: for (var _fun9152_ip = 0;;) switch (_fun9152_ip) {
            case 0:
                var1 = arg1;
                var5 = typeof var1;
                var2 = undefined;
                var0 = 'string';
                var4 = undefined;
                if (!(var0 === var5)) {
                    _fun9152_ip = 21;
                    continue _fun9152
                }
            case 18:
                var4 = var1;
            case 21:
                var3 = undefined;
                if (!(var0 !== var5)) {
                    _fun9152_ip = 37;
                    continue _fun9152
                }
            case 27:
                var0 = {};
                var0.captureContext = var1;
                var3 = var0;
            case 37:
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var0 = var5[var0];
                var1 = var1.bind(var2)(var0);
                var0 = var1.getCurrentScope;
                var2 = var0.bind(var1)();
                var1 = var2.captureMessage;
                var0 = arg0;
                var0 = var1.bind(var2)(var0, var4, var3);
                return var0;
        }
    };
    var2.captureMessage = var4;
    var4 = function() { // Original name: captureSession, environment: var1
        _fun9153: for (var _fun9153_ip = 0;;) switch (_fun9153_ip) {
            case 0:
                var0 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var1 = 0;
                if (!(var3 > var1)) {
                    _fun9153_ip = 28;
                    continue _fun9153
                }
            case 13:
                var3 = arguments[var1];
                if (!(var0 !== var3)) {
                    _fun9153_ip = 28;
                    continue _fun9153
                }
            case 21:
                var1 = arguments[var1];
                if (var1) {
                    _fun9153_ip = 41;
                    continue _fun9153
                }
            case 28:
                var1 = _closure1_slot7;
                var1 = var1.bind(var0)();
                _fun9153_ip = 52;
                continue _fun9153;
            case 41:
                var1 = _closure1_slot6;
                var1 = var1.bind(var0)();
            case 52:
                return var0;
        }
    };
    var2.captureSession = var4;
    var4 = function(arg0) { // Original name: close, environment: var1
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.close = var4;
    var2.endSession = var3;
    var3 = function(arg0) { // Original name: flush, environment: var1
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.flush = var3;
    var3 = function() { // Original name: isEnabled, environment: var1
        _fun9156: for (var _fun9156_ip = 0;;) switch (_fun9156_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = var1.getClient;
                var3 = var0.bind(var1)();
                var1 = null;
                var0 = var1 == var3;
                if (var0) {
                    _fun9156_ip = 59;
                    continue _fun9156
                }
            case 44:
                var0 = var3.getOptions;
                var0 = var0.bind(var3)();
                var2 = var0.enabled;
            case 59:
                var0 = false;
                var0 = var0 !== var2;
                if (!var0) {
                    _fun9156_ip = 91;
                    continue _fun9156
                }
            case 68:
                var1 = var1 == var3;
                if (var1) {
                    _fun9156_ip = 88;
                    continue _fun9156
                }
            case 75:
                var2 = var3.getTransport;
                var2 = var2.bind(var3)();
                var1 = !var2;
            case 88:
                var0 = !var1;
            case 91:
                return var0;
        }
    };
    var2.isEnabled = var3;
    var3 = function() { // Original name: isInitialized, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.getClient;
        var0 = var0.bind(var1)();
        var0 = !var0;
        var0 = !var0;
        return var0;
    };
    var2.isInitialized = var3;
    var3 = function() { // Original name: lastEventId, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.getIsolationScope;
        var1 = var0.bind(var1)();
        var0 = var1.lastEventId;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.lastEventId = var3;
    var3 = function(arg0, arg1) { // Original name: setContext, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getIsolationScope;
        var4 = var1.bind(var2)();
        var3 = var4.setContext;
        var2 = arg0;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.setContext = var3;
    var3 = function(arg0, arg1) { // Original name: setExtra, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getIsolationScope;
        var4 = var1.bind(var2)();
        var3 = var4.setExtra;
        var2 = arg0;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.setExtra = var3;
    var3 = function(arg0) { // Original name: setExtras, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getIsolationScope;
        var3 = var1.bind(var2)();
        var2 = var3.setExtras;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setExtras = var3;
    var3 = function(arg0, arg1) { // Original name: setTag, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getIsolationScope;
        var4 = var1.bind(var2)();
        var3 = var4.setTag;
        var2 = arg0;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.setTag = var3;
    var3 = function(arg0) { // Original name: setTags, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getIsolationScope;
        var3 = var1.bind(var2)();
        var2 = var3.setTags;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setTags = var3;
    var3 = function(arg0) { // Original name: setUser, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getIsolationScope;
        var3 = var1.bind(var2)();
        var2 = var3.setUser;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setUser = var3;
    var3 = function(arg0) { // Original name: startSession, environment: var1
        _fun9165: for (var _fun9165_ip = 0;;) switch (_fun9165_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var2 = var5[var0];
                var3 = undefined;
                var6 = var4.bind(var3)(var2);
                var2 = var6.getIsolationScope;
                var2 = var2.bind(var6)();
                var0 = var5[var0];
                var6 = var4.bind(var3)(var0);
                var0 = var6.getCurrentScope;
                var7 = var0.bind(var6)();
                var0 = 8;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.GLOBAL_OBJ;
                var0 = var0.navigator;
                if (var0) {
                    _fun9165_ip = 83;
                    continue _fun9165
                }
            case 81:
                var0 = {};
            case 83:
                var11 = var0.userAgent;
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 9;
                var0 = var0[var6];
                var5 = var4.bind(var3)(var0);
                var4 = var5.makeSession;
                var0 = global;
                var10 = var0.Object;
                var9 = var10.assign;
                var8 = {};
                var0 = var7.getUser;
                var0 = var0.bind(var7)();
                if (var0) {
                    _fun9165_ip = 153;
                    continue _fun9165
                }
            case 143:
                var7 = var2.getUser;
                var0 = var7.bind(var2)();
            case 153:
                var8.user = var0;
                var7 = var11;
                if (!var7) {
                    _fun9165_ip = 173;
                    continue _fun9165
                }
            case 163:
                var0 = {};
                var0.userAgent = var11;
                var7 = var0;
            case 173:
                var0 = arg0;
                var0 = var9.bind(var10)(var8, var7, var0);
                var0 = var4.bind(var5)(var0);
                var4 = var2.getSession;
                var7 = var4.bind(var2)();
                var4 = null;
                var4 = var4 == var7;
                var5 = undefined;
                if (var4) {
                    _fun9165_ip = 214;
                    continue _fun9165
                }
            case 209:
                var5 = var7.status;
            case 214:
                var4 = 'ok';
                if (!(var4 === var5)) {
                    _fun9165_ip = 261;
                    continue _fun9165
                }
            case 222:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var6];
                var6 = var5.bind(var3)(var4);
                var5 = var6.updateSession;
                var4 = {};
                var8 = 'exited';
                var4.status = var8;
                var4 = var5.bind(var6)(var7, var4);
            case 261:
                var1 = _closure1_slot6;
                var1 = var1.bind(var3)();
                var1 = var2.setSession;
                var1 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.startSession = var3;
    var1 = function(arg0, arg1, arg2) { // Original name: withMonitor, environment: var1
        var2 = arg0;
        var _closure2_slot0 = var2;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = function(arg0) { // Original name: finishCheckIn, environment: var0
            var2 = _closure1_slot3;
            var1 = {};
            var4 = _closure2_slot0;
            var1.monitorSlug = var4;
            var4 = arg0;
            var1.status = var4;
            var4 = _closure2_slot2;
            var1.checkInId = var4;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var0 = 6;
            var4 = var4[var0];
            var0 = undefined;
            var5 = var5.bind(var0)(var4);
            var4 = var5.timestampInSeconds;
            var4 = var4.bind(var5)();
            var3 = _closure2_slot3;
            var3 = var4 - var3;
            var1.duration = var3;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var _closure2_slot4 = var1;
        var5 = _closure1_slot3;
        var4 = {};
        var4.monitorSlug = var2;
        var2 = 'in_progress';
        var4.status = var2;
        var3 = undefined;
        var2 = arg2;
        var2 = var5.bind(var3)(var4, var2);
        var _closure2_slot2 = var2;
        var2 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 6;
        var1 = var4[var1];
        var5 = var2.bind(var3)(var1);
        var1 = var5.timestampInSeconds;
        var1 = var1.bind(var5)();
        var _closure2_slot3 = var1;
        var1 = 1;
        var1 = var4[var1];
        var2 = var2.bind(var3)(var1);
        var1 = var2.withIsolationScope;
        var0 = function() { // Environment: var0
            _fun9168: for (var _fun9168_ip = 0;;) switch (_fun9168_ip) {
                case 0:
                    var3 = undefined;
                    var2 = undefined;
                case 6: // try_start_0
                    var4 = _closure2_slot1;
                    var2 = var4.bind(var3)();
                case 17: // try_end0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 7;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.isThenable;
                    var4 = var2;
                    var4 = var5.bind(var6)(var4);
                    if (var4) {
                        _fun9168_ip = 75;
                        continue _fun9168
                    }
                case 57:
                    var4 = _closure2_slot4;
                    var0 = 'ok';
                    var0 = var4.bind(var3)(var0);
                    var0 = var2;
                    _fun9168_ip = 99;
                    continue _fun9168;
                case 75:
                    var5 = var2;
                    var4 = var5.then;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure2_slot4;
                        var1 = undefined;
                        var0 = 'ok';
                        var0 = var2.bind(var1)(var0);
                        var0 = arg0;
                        return var0;
                    };
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure2_slot4;
                        var1 = undefined;
                        var0 = 'error';
                        var0 = var2.bind(var1)(var0);
                        var0 = arg0;
                        throw var0;
                    };
                    var0 = var4.bind(var5)(var2, var1);
                case 99:
                    return var0;
                case 101: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var2 = _closure2_slot4;
                    var1 = 'error';
                    var1 = var2.bind(var3)(var1);
                    throw var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.withMonitor = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 847, 868, 823, 824, 830, 837, 827, 821, 844]);