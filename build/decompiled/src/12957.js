// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var1 = var0.type;
        var0 = undefined;
        var0 = var0 === var1;
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var1 = var0.type;
        var0 = 'transaction';
        var0 = var0 === var1;
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0() {
            _fun99423: for (var _fun99423_ip = 0;;) switch (_fun99423_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var5 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var5.bind(var0)(var2, var3);
                    var2._options = var4;
                    var3 = {};
                    var2._integrations = var3;
                    var3 = 0;
                    var2._numProcessing = var3;
                    var3 = {};
                    var2._outcomes = var3;
                    var3 = {};
                    var2._hooks = var3;
                    var3 = new Array(0);
                    var2._eventProcessors = var3;
                    var3 = var4.dsn;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    if (var3) {
                        _fun99423_ip = 158;
                        continue _fun99423
                    }
                case 93:
                    var3 = 4;
                    var3 = var6[var3];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.DEBUG_BUILD;
                    if (!var3) {
                        _fun99423_ip = 193;
                        continue _fun99423
                    }
                case 114:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 3;
                    var3 = var8[var3];
                    var3 = var7.bind(var0)(var3);
                    var8 = var3.logger;
                    var7 = var8.warn;
                    var3 = 'No DSN provided, client will not send events.';
                    var3 = var7.bind(var8)(var3);
                    _fun99423_ip = 193;
                    continue _fun99423;
                case 158:
                    var3 = 3;
                    var3 = var6[var3];
                    var6 = var5.bind(var0)(var3);
                    var5 = var6.makeDsn;
                    var3 = var4.dsn;
                    var3 = var5.bind(var6)(var3);
                    var2._dsn = var3;
                case 193:
                    var3 = var2._dsn;
                    if (!var3) {
                        _fun99423_ip = 362;
                        continue _fun99423
                    }
                case 205:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 5;
                    var1 = var5[var1];
                    var7 = var3.bind(var0)(var1);
                    var6 = var7.getEnvelopeEndpointWithUrlEncodedAuth;
                    var5 = var2._dsn;
                    var3 = var4.tunnel;
                    var8 = var4._metadata;
                    var1 = undefined;
                    if (!var8) {
                        _fun99423_ip = 266;
                        continue _fun99423
                    }
                case 254:
                    var8 = var4._metadata;
                    var1 = var8.sdk;
                case 266:
                    var9 = var6.bind(var7)(var5, var3, var1);
                    var3 = var4.transport;
                    var1 = global;
                    var8 = var1.Object;
                    var7 = var8.assign;
                    var6 = {};
                    var1 = var2._options;
                    var1 = var1.tunnel;
                    var6.tunnel = var1;
                    var5 = var2.recordDroppedEvent;
                    var1 = var5.bind;
                    var1 = var1.bind(var5)(var2);
                    var6.recordDroppedEvent = var1;
                    var5 = var4.transportOptions;
                    var1 = {};
                    var1.url = var9;
                    var1 = var7.bind(var8)(var6, var5, var1);
                    var1 = var3.bind(var4)(var1);
                    var2._transport = var1;
                case 362:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'captureException';
        var0.key = var1;
        var1 = function arg0, arg1, arg2() {
            _fun99424: for (var _fun99424_ip = 0;;) switch (_fun99424_ip) {
                case 0:
                    var9 = arg0;
                    var7 = this;
                    var0 = arg2;
                    var _closure3_slot0 = var0;
                    var _closure3_slot1 = var7;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var4 = 3;
                    var0 = var2[var4];
                    var3 = undefined;
                    var8 = var6.bind(var3)(var0);
                    var0 = var8.uuid4;
                    var0 = var0.bind(var8)();
                    var2 = var2[var4];
                    var6 = var6.bind(var3)(var2);
                    var2 = var6.checkOrSetAlreadyCaught;
                    var2 = var2.bind(var6)(var9);
                    if (var2) {
                        _fun99424_ip = 158;
                        continue _fun99424
                    }
                case 77:
                    var2 = global;
                    var10 = var2.Object;
                    var8 = var10.assign;
                    var6 = {};
                    var6.event_id = var0;
                    var2 = arg1;
                    var2 = var8.bind(var10)(var6, var2);
                    var _closure3_slot2 = var2;
                    var6 = var7._process;
                    var8 = var7.eventFromException;
                    var9 = var8.bind(var7)(var9, var2);
                    var8 = var9.then;
                    var5 = function(arg0) { // Environment: var5
                        var4 = _closure3_slot1;
                        var3 = var4._captureEvent;
                        var2 = _closure3_slot2;
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var0 = var3.bind(var4)(var0, var2, var1);
                        return var0;
                    };
                    var5 = var8.bind(var9)(var5);
                    var5 = var6.bind(var7)(var5);
                    var2 = var2.event_id;
                    return var2;
                case 158:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 4;
                    var2 = var6[var2];
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.DEBUG_BUILD;
                    if (!var2) {
                        _fun99424_ip = 226;
                        continue _fun99424
                    }
                case 187:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.logger;
                    var2 = var3.log;
                    var1 = "Not capturing exception because it's already been captured.";
                    var1 = var2.bind(var3)(var1);
                case 226:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(31);
        var1[0] = var0;
        var0 = {};
        var5 = 'captureMessage';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3() {
            _fun99426: for (var _fun99426_ip = 0;;) switch (_fun99426_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = arg3;
                    var _closure3_slot0 = var0;
                    var _closure3_slot1 = var3;
                    var5 = global;
                    var12 = var5.Object;
                    var11 = var12.assign;
                    var10 = {};
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var8 = 3;
                    var0 = var6[var8];
                    var7 = undefined;
                    var13 = var9.bind(var7)(var0);
                    var0 = var13.uuid4;
                    var0 = var0.bind(var13)();
                    var10.event_id = var0;
                    var0 = arg2;
                    var0 = var11.bind(var12)(var10, var0);
                    var _closure3_slot2 = var0;
                    var6 = var6[var8];
                    var9 = var9.bind(var7)(var6);
                    var6 = var9.isParameterizedString;
                    var9 = var6.bind(var9)(var4);
                    var6 = var4;
                    if (var9) {
                        _fun99426_ip = 124;
                        continue _fun99426
                    }
                case 113:
                    var5 = var5.String;
                    var6 = var5.bind(var7)(var4);
                case 124:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var8];
                    var5 = var5.bind(var7)(var2);
                    var2 = var5.isPrimitive;
                    var2 = var2.bind(var5)(var4);
                    if (var2) {
                        _fun99426_ip = 169;
                        continue _fun99426
                    }
                case 155:
                    var2 = var3.eventFromException;
                    var5 = var2.bind(var3)(var4, var0);
                    _fun99426_ip = 185;
                    continue _fun99426;
                case 169:
                    var4 = var3.eventFromMessage;
                    var2 = arg1;
                    var5 = var4.bind(var3)(var6, var2, var0);
                case 185:
                    var2 = var3._process;
                    var4 = var5.then;
                    var1 = function(arg0) { // Environment: var1
                        var4 = _closure3_slot1;
                        var3 = var4._captureEvent;
                        var2 = _closure3_slot2;
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var0 = var3.bind(var4)(var0, var2, var1);
                        return var0;
                    };
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    var0 = var0.event_id;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'captureEvent';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun99428: for (var _fun99428_ip = 0;;) switch (_fun99428_ip) {
                case 0:
                    var9 = arg0;
                    var8 = arg1;
                    var10 = arg2;
                    var7 = this;
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var4 = 3;
                    var0 = var0[var4];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var0);
                    var0 = var2.uuid4;
                    var0 = var0.bind(var2)();
                    if (!var8) {
                        _fun99428_ip = 96;
                        continue _fun99428
                    }
                case 50:
                    var2 = var8.originalException;
                    if (!var2) {
                        _fun99428_ip = 96;
                        continue _fun99428
                    }
                case 59:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var4];
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.checkOrSetAlreadyCaught;
                    var2 = var8.originalException;
                    var2 = var5.bind(var6)(var2);
                    if (var2) {
                        _fun99428_ip = 177;
                        continue _fun99428
                    }
                case 96:
                    var2 = global;
                    var6 = var2.Object;
                    var5 = var6.assign;
                    var2 = {};
                    var2.event_id = var0;
                    var2 = var5.bind(var6)(var2, var8);
                    var5 = var9.sdkProcessingMetadata;
                    if (var5) {
                        _fun99428_ip = 133;
                        continue _fun99428
                    }
                case 131:
                    var5 = {};
                case 133:
                    var8 = var5.capturedSpanScope;
                    var6 = var7._process;
                    var5 = var7._captureEvent;
                    if (var8) {
                        _fun99428_ip = 157;
                        continue _fun99428
                    }
                case 154:
                    var8 = var10;
                case 157:
                    var5 = var5.bind(var7)(var9, var2, var8);
                    var5 = var6.bind(var7)(var5);
                    var2 = var2.event_id;
                    return var2;
                case 177:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 4;
                    var2 = var6[var2];
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.DEBUG_BUILD;
                    if (!var2) {
                        _fun99428_ip = 245;
                        continue _fun99428
                    }
                case 206:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.logger;
                    var2 = var3.log;
                    var1 = "Not capturing exception because it's already been captured.";
                    var1 = var2.bind(var3)(var1);
                case 245:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'captureSession';
        var0.key = var5;
        var5 = function arg0() {
            _fun99429: for (var _fun99429_ip = 0;;) switch (_fun99429_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var0 = var3.release;
                    var2 = 'string';
                    var0 = typeof var0;
                    if (!(var2 === var0)) {
                        _fun99429_ip = 82;
                        continue _fun99429
                    }
                case 23:
                    var0 = var1.sendSession;
                    var0 = var0.bind(var1)(var3);
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.updateSession;
                    var0 = {};
                    var4 = false;
                    var0.init = var4;
                    var0 = var1.bind(var2)(var3, var0);
                    _fun99429_ip = 158;
                    continue _fun99429;
                case 82:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 4;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.DEBUG_BUILD;
                    if (!var1) {
                        _fun99429_ip = 158;
                        continue _fun99429
                    }
                case 116:
                    var1 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 3;
                    var0 = var3[var0];
                    var0 = var1.bind(var2)(var0);
                    var2 = var0.logger;
                    var1 = var2.warn;
                    var0 = 'Discarded session because of missing or non-string release';
                    var0 = var1.bind(var2)(var0);
                case 158:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getDsn';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._dsn;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getOptions';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._options;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getSdkMetadata';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._options;
            var0 = var0._metadata;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getTransport';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._transport;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'flush';
        var0.key = var5;
        var5 = function arg0() {
            _fun99434: for (var _fun99434_ip = 0;;) switch (_fun99434_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var _closure3_slot0 = var4;
                    var0 = var3._transport;
                    var _closure3_slot1 = var0;
                    if (var0) {
                        _fun99434_ip = 65;
                        continue _fun99434
                    }
                case 25:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 3;
                    var2 = var2[var0];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var2);
                    var2 = var5.resolvedSyncPromise;
                    var0 = true;
                    var0 = var2.bind(var5)(var0);
                    _fun99434_ip = 108;
                    continue _fun99434;
                case 65:
                    var5 = var3.emit;
                    var2 = 'flush';
                    var2 = var5.bind(var3)(var2);
                    var2 = var3._isClientDoneProcessing;
                    var3 = var2.bind(var3)(var4);
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var3 = _closure3_slot1;
                        var2 = var3.flush;
                        var1 = _closure3_slot0;
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.then;
                        var0 = function(arg0) { // Environment: var0
                            _fun99436: for (var _fun99436_ip = 0;;) switch (_fun99436_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = _closure4_slot0;
                                    if (!var0) {
                                        _fun99436_ip = 16;
                                        continue _fun99436
                                    }
                                case 13:
                                    var0 = var1;
                                case 16:
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 108:
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'close';
        var0.key = var5;
        var5 = function arg0() {
            var3 = this;
            var _closure3_slot0 = var3;
            var2 = var3.flush;
            var1 = arg0;
            var2 = var2.bind(var3)(var1);
            var1 = var2.then;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var0 = var2.getOptions;
                var1 = var0.bind(var2)();
                var0 = false;
                var1.enabled = var0;
                var1 = var2.emit;
                var0 = 'close';
                var0 = var1.bind(var2)(var0);
                var0 = arg0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'getEventProcessors';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._eventProcessors;
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'addEventProcessor';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0._eventProcessors;
            var1 = var2.push;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'init';
        var0.key = var5;
        var5 = function() {
            _fun99441: for (var _fun99441_ip = 0;;) switch (_fun99441_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._isEnabled;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun99441_ip = 48;
                        continue _fun99441
                    }
                case 16:
                    var2 = var1._options;
                    var4 = var2.integrations;
                    var3 = var4.some;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var2 = var0.name;
                        var1 = var2.startsWith;
                        var0 = 'Spotlight';
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var3.bind(var4)(var2);
                case 48:
                    if (!var0) {
                        _fun99441_ip = 61;
                        continue _fun99441
                    }
                case 51:
                    var0 = var1._setupIntegrations;
                    var0 = var0.bind(var1)();
                case 61:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'getIntegrationByName';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = var0._integrations;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'addIntegration';
        var0.key = var5;
        var5 = function arg0() {
            _fun99444: for (var _fun99444_ip = 0;;) switch (_fun99444_ip) {
                case 0:
                    var5 = arg0;
                    var4 = this;
                    var1 = var4._integrations;
                    var0 = var5.name;
                    var2 = var1[var0];
                    var7 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var3 = 7;
                    var6 = var0[var3];
                    var0 = undefined;
                    var8 = var7.bind(var0)(var6);
                    var7 = var8.setupIntegration;
                    var6 = var4._integrations;
                    var6 = var7.bind(var8)(var4, var5, var6);
                    if (var2) {
                        _fun99444_ip = 105;
                        continue _fun99444
                    }
                case 68:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var3];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.afterSetupIntegrations;
                    var1 = new Array(1);
                    var1[0] = var5;
                    var1 = var2.bind(var3)(var4, var1);
                case 105:
                    return var0;
            }
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'sendEvent';
        var0.key = var5;
        var5 = function arg0() {
            _fun99445: for (var _fun99445_ip = 0;;) switch (_fun99445_ip) {
                case 0:
                    var11 = arg0;
                    var4 = this;
                    var0 = undefined;
                    var6 = undefined;
                    var _closure3_slot0 = var11;
                    var2 = undefined;
                    var _closure3_slot1 = var4;
                    var3 = arguments.length;
                    var5 = 1;
                    if (!(var3 > var5)) {
                        _fun99445_ip = 40;
                        continue _fun99445
                    }
                case 32:
                    var3 = arguments[var5];
                    if (!(var0 === var3)) {
                        _fun99445_ip = 44;
                        continue _fun99445
                    }
                case 40:
                    var3 = {};
                    _fun99445_ip = 48;
                    continue _fun99445;
                case 44:
                    var3 = arguments[var5];
                case 48:
                    var6 = var4.emit;
                    var5 = 'beforeSendEvent';
                    var5 = var6.bind(var4)(var5, var11, var3);
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 8;
                    var5 = var8[var5];
                    var10 = var6.bind(var0)(var5);
                    var9 = var10.createEventEnvelope;
                    var16 = var4._dsn;
                    var5 = var4._options;
                    var15 = var5._metadata;
                    var5 = var4._options;
                    var14 = var5.tunnel;
                    var18 = var10;
                    var17 = var11;
                    var2 = var18[var9](var17, var16, var15, var14, var13);
                    var3 = var3.attachments;
                    if (var3) {
                        _fun99445_ip = 149;
                        continue _fun99445
                    }
                case 145:
                    var3 = new Array(0);
                case 149:
                    var6 = var3;
                    var5 = var6[Symbol.iterator];
                    var6 = var5().next;
                    var3 = 3;
                case 158:
                    var13 = var6().value;
                    var8 = var5;
                    if (!(var8 !== var0)) {
                        _fun99445_ip = 230;
                        continue _fun99445
                    }
                case 169: // try_start_0
                    var12 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var9 = var8[var3];
                    var11 = var12.bind(var0)(var9);
                    var10 = var11.addItemToEnvelope;
                    var9 = var2;
                    var8 = var8[var3];
                    var12 = var12.bind(var0)(var8);
                    var8 = var12.createAttachmentEnvelopeItem;
                    var8 = var8.bind(var12)(var13);
                    var2 = var10.bind(var11)(var9, var8);
                case 221: // try_end0
                    _fun99445_ip = 158;
                    continue _fun99445;
                case 223: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var5.return();
                    throw var3;
                case 230:
                    var3 = var4.sendEnvelope;
                    var4 = var3.bind(var4)(var2);
                    if (!var4) {
                        _fun99445_ip = 264;
                        continue _fun99445
                    }
                case 244:
                    var3 = var4.then;
                    var2 = function(arg0) { // Environment: var1
                        var4 = _closure3_slot1;
                        var3 = var4.emit;
                        var2 = _closure3_slot0;
                        var1 = 'afterSendEvent';
                        var0 = arg0;
                        var0 = var3.bind(var4)(var1, var2, var0);
                        return var0;
                    };
                    var1 = null;
                    var1 = var3.bind(var4)(var2, var1);
                case 264:
                    return var0;
            }
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'sendSession';
        var0.key = var5;
        var5 = function arg0() {
            var3 = this;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var7 = var2.bind(var0)(var1);
            var6 = var7.createSessionEnvelope;
            var10 = var3._dsn;
            var1 = var3._options;
            var9 = var1._metadata;
            var1 = var3._options;
            var8 = var1.tunnel;
            var11 = arg0;
            var12 = var7;
            var2 = var12[var6](var11, var10, var9, var8, var7);
            var1 = var3.sendEnvelope;
            var1 = var1.bind(var3)(var2);
            return var0;
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'recordDroppedEvent';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun99448: for (var _fun99448_ip = 0;;) switch (_fun99448_ip) {
                case 0:
                    var1 = arg2;
                    var0 = this;
                    var2 = var0._options;
                    var2 = var2.sendClientReports;
                    if (!var2) {
                        _fun99448_ip = 244;
                        continue _fun99448
                    }
                case 24:
                    var6 = 1;
                    var4 = 'number';
                    var2 = typeof var1;
                    var3 = var6;
                    if (!(var4 === var2)) {
                        _fun99448_ip = 44;
                        continue _fun99448
                    }
                case 41:
                    var3 = var1;
                case 44:
                    var1 = global;
                    var2 = var1.HermesInternal;
                    var8 = var2.concat;
                    var7 = '';
                    var5 = arg0;
                    var4 = ':';
                    var2 = arg1;
                    var2 = var8.bind(var7)(var5, var4, var2);
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 4;
                    var5 = var8[var5];
                    var8 = undefined;
                    var5 = var9.bind(var8)(var5);
                    var5 = var5.DEBUG_BUILD;
                    if (!var5) {
                        _fun99448_ip = 215;
                        continue _fun99448
                    }
                case 112:
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var4 = 3;
                    var4 = var9[var4];
                    var4 = var5.bind(var8)(var4);
                    var5 = var4.logger;
                    var4 = var5.log;
                    var6 = var3 > var6;
                    var8 = var7;
                    if (!var6) {
                        _fun99448_ip = 182;
                        continue _fun99448
                    }
                case 153:
                    var6 = var1.HermesInternal;
                    var9 = var6.concat;
                    var7 = ' (';
                    var6 = ' times)';
                    var8 = var9.bind(var7)(var3, var6);
                case 182:
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = 'Recording outcome: "';
                    var1 = '"';
                    var1 = var7.bind(var6)(var2, var1, var8);
                    var1 = var4.bind(var5)(var1);
                case 215:
                    var1 = var0._outcomes;
                    var0 = var0._outcomes;
                    var0 = var0[var2];
                    if (var0) {
                        _fun99448_ip = 236;
                        continue _fun99448
                    }
                case 234:
                    var0 = 0;
                case 236:
                    var0 = var0 + var3;
                    var1[var2] = var0;
                case 244:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = 'on';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun99449: for (var _fun99449_ip = 0;;) switch (_fun99449_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var2 = this;
                    var _closure3_slot0 = var3;
                    var1 = var2._hooks;
                    var2 = var2._hooks;
                    var2 = var2[var4];
                    if (var2) {
                        _fun99449_ip = 38;
                        continue _fun99449
                    }
                case 34:
                    var2 = new Array(0);
                case 38:
                    var1[var4] = var2;
                    var _closure3_slot1 = var2;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    var0 = function() { // Environment: var0
                        _fun99450: for (var _fun99450_ip = 0;;) switch (_fun99450_ip) {
                            case 0:
                                var3 = _closure3_slot1;
                                var2 = var3.indexOf;
                                var1 = _closure3_slot0;
                                var3 = var2.bind(var3)(var1);
                                var1 = -1;
                                if (!(var3 > var1)) {
                                    _fun99450_ip = 51;
                                    continue _fun99450
                                }
                            case 32:
                                var2 = _closure3_slot1;
                                var1 = var2.splice;
                                var0 = 1;
                                var0 = var1.bind(var2)(var3, var0);
                            case 51:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
            }
        };
        var0.value = var5;
        var1[18] = var0;
        var0 = {};
        var5 = 'emit';
        var0.key = var5;
        var5 = function arg0() {
            _fun99451: for (var _fun99451_ip = 0;;) switch (_fun99451_ip) {
                case 0:
                    var0 = undefined;
                    var6 = undefined;
                    var5 = arguments.length;
                    var2 = global;
                    var7 = var2.Array;
                    var4 = 1;
                    var3 = var5 > var4;
                    var2 = 0;
                    if (!var3) {
                        _fun99451_ip = 33;
                        continue _fun99451
                    }
                case 29:
                    var2 = var5 - var4;
                case 33:
                    var3 = var7.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var7
                        }
                    });
                    var10 = var3;
                    var9 = var2;
                    var2 = new var10[var7](var9, var8);
                    var3 = var2 instanceof Object ? var2 : var3;
                    var _closure3_slot0 = var3;
                    var7 = var4 < var5;
                    var2 = var4;
                    if (!var7) {
                        _fun99451_ip = 89;
                        continue _fun99451
                    }
                case 70:
                    var8 = var2 - var4;
                    var7 = arguments[var2];
                    var3[var8] = var7;
                    var2 = var2 + 1;
                    if (var2 < var5) {
                        _fun99451_ip = 70;
                        continue _fun99451
                    }
                case 89:
                    var2 = this;
                    var3 = var2._hooks;
                    var2 = arg0;
                    var3 = var3[var2];
                    if (!var3) {
                        _fun99451_ip = 125;
                        continue _fun99451
                    }
                case 108:
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var3 = arg0;
                        var2 = var3.apply;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                case 125:
                    return var0;
            }
        };
        var0.value = var5;
        var1[19] = var0;
        var0 = {};
        var5 = 'sendEnvelope';
        var0.key = var5;
        var5 = function arg0() {
            _fun99453: for (var _fun99453_ip = 0;;) switch (_fun99453_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var2 = var1.emit;
                    var0 = 'beforeEnvelope';
                    var0 = var2.bind(var1)(var0, var3);
                    var0 = var1._isEnabled;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun99453_ip = 46;
                        continue _fun99453
                    }
                case 37:
                    var0 = var1._transport;
                    if (var0) {
                        _fun99453_ip = 157;
                        continue _fun99453
                    }
                case 46:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 4;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.DEBUG_BUILD;
                    if (!var2) {
                        _fun99453_ip = 122;
                        continue _fun99453
                    }
                case 80:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 3;
                    var2 = var6[var2];
                    var2 = var5.bind(var4)(var2);
                    var6 = var2.logger;
                    var5 = var6.error;
                    var2 = 'Transport disabled';
                    var2 = var5.bind(var6)(var2);
                case 122:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 3;
                    var0 = var5[var0];
                    var4 = var2.bind(var4)(var0);
                    var2 = var4.resolvedSyncPromise;
                    var0 = {};
                    var0 = var2.bind(var4)(var0);
                    _fun99453_ip = 196;
                    continue _fun99453;
                case 157:
                    var2 = var1._transport;
                    var1 = var2.send;
                    var4 = var1.bind(var2)(var3);
                    var3 = var4.then;
                    var2 = null;
                    var1 = function(arg0) { // Environment: var1
                        _fun99454: for (var _fun99454_ip = 0;;) switch (_fun99454_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var2 = 4;
                                var2 = var3[var2];
                                var3 = undefined;
                                var2 = var4.bind(var3)(var2);
                                var2 = var2.DEBUG_BUILD;
                                if (!var2) {
                                    _fun99454_ip = 80;
                                    continue _fun99454
                                }
                            case 37:
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var1 = 3;
                                var1 = var4[var1];
                                var1 = var2.bind(var3)(var1);
                                var3 = var1.logger;
                                var2 = var3.error;
                                var1 = 'Error while sending event:';
                                var1 = var2.bind(var3)(var1, var0);
                            case 80:
                                return var0;
                        }
                    };
                    var0 = var3.bind(var4)(var2, var1);
                case 196:
                    return var0;
            }
        };
        var0.value = var5;
        var1[20] = var0;
        var0 = {};
        var5 = '_setupIntegrations';
        var0.key = var5;
        var5 = function() {
            var4 = this;
            var0 = var4._options;
            var3 = var0.integrations;
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 7;
            var6 = var5[var1];
            var0 = undefined;
            var7 = var2.bind(var0)(var6);
            var6 = var7.setupIntegrations;
            var6 = var6.bind(var7)(var4, var3);
            var4._integrations = var6;
            var1 = var5[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.afterSetupIntegrations;
            var1 = var1.bind(var2)(var4, var3);
            return var0;
        };
        var0.value = var5;
        var1[21] = var0;
        var0 = {};
        var5 = '_updateSessionFromEvent';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun99456: for (var _fun99456_ip = 0;;) switch (_fun99456_ip) {
                case 0:
                    var3 = arg0;
                    var4 = arg1;
                    var2 = this;
                    var0 = undefined;
                    var7 = undefined;
                    var6 = false;
                    var12 = false;
                    var1 = var4.exception;
                    if (!var1) {
                        _fun99456_ip = 37;
                        continue _fun99456
                    }
                case 26:
                    var4 = var4.exception;
                    var1 = var4.values;
                case 37:
                    var11 = false;
                    if (!var1) {
                        _fun99456_ip = 104;
                        continue _fun99456
                    }
                case 42:
                    var5 = var1;
                    var4 = var5[Symbol.iterator];
                    var5 = var4().next;
                case 48:
                    var8 = var5().value;
                    var9 = var4;
                    var11 = true;
                    if (!(var9 !== var0)) {
                        _fun99456_ip = 104;
                        continue _fun99456
                    }
                case 61: // try_start_0
                    var8 = var8.mechanism;
                    var7 = var8;
                    if (!var8) {
                        _fun99456_ip = 86;
                        continue _fun99456
                    }
                case 73:
                    var8 = var7;
                    var8 = var8.handled;
                    if (!(var6 !== var8)) {
                        _fun99456_ip = 88;
                        continue _fun99456
                    }
                case 86: // try_end0
                    _fun99456_ip = 48;
                    continue _fun99456;
                case 88: // try_start_1
                    var12 = true;
                case 90: // try_end1
                    var4.return();
                    var11 = true;
                    _fun99456_ip = 104;
                    continue _fun99456;
                case 97: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register = 1);
                    var4.return();
                    throw var1;
                case 104:
                    var4 = var3.status;
                    var1 = 'ok';
                    var4 = var1 === var4;
                    var1 = var4;
                    if (!var4) {
                        _fun99456_ip = 135;
                        continue _fun99456
                    }
                case 123:
                    var6 = var3.errors;
                    var5 = 0;
                    var1 = var5 === var6;
                case 135:
                    if (var1) {
                        _fun99456_ip = 147;
                        continue _fun99456
                    }
                case 138:
                    if (!var4) {
                        _fun99456_ip = 144;
                        continue _fun99456
                    }
                case 141:
                    var4 = var12;
                case 144:
                    var1 = var4;
                case 147:
                    if (!var1) {
                        _fun99456_ip = 270;
                        continue _fun99456
                    }
                case 150:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 6;
                    var1 = var5[var1];
                    var5 = var4.bind(var0)(var1);
                    var4 = var5.updateSession;
                    var10 = global;
                    var9 = var10.Object;
                    var8 = var9.assign;
                    var7 = var12;
                    if (!var7) {
                        _fun99456_ip = 211;
                        continue _fun99456
                    }
                case 198:
                    var1 = {};
                    var6 = 'crashed';
                    var1.status = var6;
                    var7 = var1;
                case 211:
                    var6 = {};
                    var1 = var3.errors;
                    if (var1) {
                        _fun99456_ip = 239;
                        continue _fun99456
                    }
                case 222:
                    var10 = var10.Number;
                    if (var11) {
                        _fun99456_ip = 234;
                        continue _fun99456
                    }
                case 231:
                    var11 = var12;
                case 234:
                    var1 = var10.bind(var0)(var11);
                case 239:
                    var6.errors = var1;
                    var1 = {};
                    var1 = var8.bind(var9)(var1, var7, var6);
                    var1 = var4.bind(var5)(var3, var1);
                    var1 = var2.captureSession;
                    var1 = var1.bind(var2)(var3);
                case 270:
                    return var0;
            }
        };
        var0.value = var5;
        var1[22] = var0;
        var0 = {};
        var5 = '_isClientDoneProcessing';
        var0.key = var5;
        var5 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = this;
            var _closure3_slot1 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.SyncPromise;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var4 = function(arg0) { // Environment: var0
                var0 = arg0;
                var _closure4_slot0 = var0;
                var0 = 0;
                var _closure4_slot1 = var0;
                var0 = global;
                var4 = var0.setInterval;
                var0 = undefined;
                var3 = function() { // Environment: var2
                    _fun99459: for (var _fun99459_ip = 0;;) switch (_fun99459_ip) {
                        case 0:
                            var0 = _closure3_slot1;
                            var1 = var0._numProcessing;
                            var0 = 0;
                            if (!(var0 != var1)) {
                                _fun99459_ip = 91;
                                continue _fun99459
                            }
                        case 19:
                            var3 = _closure4_slot1;
                            var1 = 1;
                            var1 = var3 + var1;
                            _closure4_slot1 = var1;
                            var1 = _closure3_slot0;
                            if (!var1) {
                                _fun99459_ip = 56;
                                continue _fun99459
                            }
                        case 44:
                            var3 = _closure4_slot1;
                            var2 = _closure3_slot0;
                            var1 = var3 >= var2;
                        case 56:
                            if (!var1) {
                                _fun99459_ip = 124;
                                continue _fun99459
                            }
                        case 59:
                            var1 = global;
                            var3 = var1.clearInterval;
                            var1 = _closure4_slot2;
                            var2 = undefined;
                            var1 = var3.bind(var2)(var1);
                            var1 = _closure4_slot0;
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                            _fun99459_ip = 124;
                            continue _fun99459;
                        case 91:
                            var0 = global;
                            var3 = var0.clearInterval;
                            var1 = _closure4_slot2;
                            var2 = undefined;
                            var1 = var3.bind(var2)(var1);
                            var1 = _closure4_slot0;
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                        case 124:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = 1;
                var1 = var4.bind(var0)(var3, var1);
                var _closure4_slot2 = var1;
                return var0;
            };
            var5 = var1;
            var0 = new var5[var2](var4, var3);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var5;
        var1[23] = var0;
        var0 = {};
        var5 = '_isEnabled';
        var0.key = var5;
        var5 = function() {
            _fun99460: for (var _fun99460_ip = 0;;) switch (_fun99460_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.getOptions;
                    var0 = var0.bind(var1)();
                    var2 = var0.enabled;
                    var0 = false;
                    var0 = var0 !== var2;
                    if (!var0) {
                        _fun99460_ip = 39;
                        continue _fun99460
                    }
                case 27:
                    var2 = var1._transport;
                    var1 = undefined;
                    var0 = var1 !== var2;
                case 39:
                    return var0;
            }
        };
        var0.value = var5;
        var1[24] = var0;
        var0 = {};
        var5 = '_prepareEvent';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun99461: for (var _fun99461_ip = 0;;) switch (_fun99461_ip) {
                case 0:
                    var8 = arg0;
                    var7 = arg1;
                    var6 = arg2;
                    var5 = this;
                    var9 = undefined;
                    var2 = undefined;
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var5;
                    var3 = arguments.length;
                    var1 = 3;
                    if (!(var3 > var1)) {
                        _fun99461_ip = 44;
                        continue _fun99461
                    }
                case 36:
                    var3 = arguments[var1];
                    if (!(var9 === var3)) {
                        _fun99461_ip = 79;
                        continue _fun99461
                    }
                case 44:
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var3 = 9;
                    var3 = var10[var3];
                    var4 = var4.bind(var9)(var3);
                    var3 = var4.getIsolationScope;
                    var4 = var3.bind(var4)();
                    _fun99461_ip = 83;
                    continue _fun99461;
                case 79:
                    var4 = arguments[var1];
                case 83:
                    var _closure3_slot2 = var4;
                    var1 = var5.getOptions;
                    var3 = var1.bind(var5)();
                    var1 = global;
                    var10 = var1.Object;
                    var2 = var10.keys;
                    var1 = var5._integrations;
                    var1 = var2.bind(var10)(var1);
                    var2 = var7.integrations;
                    var2 = !var2;
                    if (!var2) {
                        _fun99461_ip = 144;
                        continue _fun99461
                    }
                case 133:
                    var11 = var1.length;
                    var10 = 0;
                    var2 = var11 > var10;
                case 144:
                    if (!var2) {
                        _fun99461_ip = 153;
                        continue _fun99461
                    }
                case 147:
                    var7.integrations = var1;
                case 153:
                    var2 = var5.emit;
                    var1 = 'preprocessEvent';
                    var1 = var2.bind(var5)(var1, var8, var7);
                    var1 = var8.type;
                    if (var1) {
                        _fun99461_ip = 204;
                        continue _fun99461
                    }
                case 178:
                    var2 = var4.setLastEventId;
                    var1 = var8.event_id;
                    if (var1) {
                        _fun99461_ip = 199;
                        continue _fun99461
                    }
                case 193:
                    var1 = var7.event_id;
                case 199:
                    var1 = var2.bind(var4)(var1);
                case 204:
                    var2 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var1 = 10;
                    var1 = var10[var1];
                    var2 = var2.bind(var9)(var1);
                    var1 = var2.prepareEvent;
                    var18 = var2;
                    var17 = var3;
                    var16 = var8;
                    var15 = var7;
                    var14 = var6;
                    var13 = var5;
                    var12 = var4;
                    var2 = var18[var1](var17, var16, var15, var14, var13, var12, var11);
                    var1 = var2.then;
                    var0 = function(arg0) { // Environment: var0
                        _fun99462: for (var _fun99462_ip = 0;;) switch (_fun99462_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = null;
                                if (!(var1 !== var0)) {
                                    _fun99462_ip = 297;
                                    continue _fun99462
                                }
                            case 12:
                                var2 = global;
                                var8 = var2.Object;
                                var6 = var8.assign;
                                var4 = _closure3_slot2;
                                var1 = var4.getPropagationContext;
                                var5 = var1.bind(var4)();
                                var1 = _closure3_slot0;
                                var7 = undefined;
                                var4 = undefined;
                                if (!var1) {
                                    _fun99462_ip = 67;
                                    continue _fun99462
                                }
                            case 53:
                                var9 = _closure3_slot0;
                                var1 = var9.getPropagationContext;
                                var4 = var1.bind(var9)();
                            case 67:
                                var1 = {};
                                var1 = var6.bind(var8)(var1, var5, var4);
                                var4 = var0.contexts;
                                if (!var4) {
                                    _fun99462_ip = 103;
                                    continue _fun99462
                                }
                            case 85:
                                var4 = var0.contexts;
                                var4 = var4.trace;
                                if (var4) {
                                    _fun99462_ip = 295;
                                    continue _fun99462
                                }
                            case 103:
                                if (!var1) {
                                    _fun99462_ip = 295;
                                    continue _fun99462
                                }
                            case 109:
                                var6 = var1.traceId;
                                var14 = var1.spanId;
                                var13 = var1.parentSpanId;
                                var1 = var1.dsc;
                                var10 = var2.Object;
                                var9 = var10.assign;
                                var8 = {};
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot1;
                                var5 = 3;
                                var5 = var12[var5];
                                var12 = var11.bind(var7)(var5);
                                var11 = var12.dropUndefinedKeys;
                                var5 = {};
                                var5.trace_id = var6;
                                var5.span_id = var14;
                                var5.parent_span_id = var13;
                                var5 = var11.bind(var12)(var5);
                                var8.trace = var5;
                                var5 = var0.contexts;
                                var5 = var9.bind(var10)(var8, var5);
                                var0.contexts = var5;
                                if (var1) {
                                    _fun99462_ip = 259;
                                    continue _fun99462
                                }
                            case 223:
                                var5 = _closure1_slot0;
                                var8 = _closure1_slot1;
                                var4 = 11;
                                var4 = var8[var4];
                                var5 = var5.bind(var7)(var4);
                                var4 = var5.getDynamicSamplingContextFromClient;
                                var3 = _closure3_slot1;
                                var1 = var4.bind(var5)(var6, var3);
                            case 259:
                                var4 = var2.Object;
                                var3 = var4.assign;
                                var2 = {};
                                var2.dynamicSamplingContext = var1;
                                var1 = var0.sdkProcessingMetadata;
                                var1 = var3.bind(var4)(var2, var1);
                                var0.sdkProcessingMetadata = var1;
                            case 295:
                                return var0;
                            case 297:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[25] = var0;
        var0 = {};
        var5 = '_captureEvent';
        var0.key = var5;
        var5 = function arg0() {
            _fun99463: for (var _fun99463_ip = 0;;) switch (_fun99463_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var2 = undefined;
                    var3 = arguments.length;
                    var1 = 1;
                    if (!(var3 > var1)) {
                        _fun99463_ip = 27;
                        continue _fun99463
                    }
                case 19:
                    var3 = arguments[var1];
                    if (!(var4 === var3)) {
                        _fun99463_ip = 31;
                        continue _fun99463
                    }
                case 27:
                    var3 = {};
                    _fun99463_ip = 35;
                    continue _fun99463;
                case 31:
                    var3 = arguments[var1];
                case 35:
                    var6 = arguments.length;
                    var1 = 2;
                    var6 = var6 > var1;
                    var4 = undefined;
                    if (!var6) {
                        _fun99463_ip = 54;
                        continue _fun99463
                    }
                case 50:
                    var4 = arguments[var1];
                case 54:
                    var2 = var5._processEvent;
                    var1 = arg0;
                    var3 = var2.bind(var5)(var1, var3, var4);
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.event_id;
                        return var0;
                    };
                    var0 = function(arg0) { // Environment: var0
                        _fun99465: for (var _fun99465_ip = 0;;) switch (_fun99465_ip) {
                            case 0:
                                var1 = arg0;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var0 = 4;
                                var3 = var3[var0];
                                var0 = undefined;
                                var3 = var4.bind(var0)(var3);
                                var3 = var3.DEBUG_BUILD;
                                if (!var3) {
                                    _fun99465_ip = 130;
                                    continue _fun99465
                                }
                            case 37:
                                var4 = var1.logLevel;
                                var3 = 'log';
                                if (!(var3 !== var4)) {
                                    _fun99465_ip = 89;
                                    continue _fun99465
                                }
                            case 51:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var3 = 3;
                                var3 = var5[var3];
                                var3 = var4.bind(var0)(var3);
                                var4 = var3.logger;
                                var3 = var4.warn;
                                var3 = var3.bind(var4)(var1);
                                _fun99465_ip = 130;
                                continue _fun99465;
                            case 89:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var2 = 3;
                                var2 = var4[var2];
                                var2 = var3.bind(var0)(var2);
                                var3 = var2.logger;
                                var2 = var3.log;
                                var1 = var1.message;
                                var1 = var2.bind(var3)(var1);
                            case 130:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[26] = var0;
        var0 = {};
        var5 = '_processEvent';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun99466: for (var _fun99466_ip = 0;;) switch (_fun99466_ip) {
                case 0:
                    var8 = arg0;
                    var10 = arg1;
                    var9 = arg2;
                    var7 = this;
                    var _closure3_slot0 = var8;
                    var _closure3_slot1 = var10;
                    var _closure3_slot2 = var9;
                    var _closure3_slot3 = var7;
                    var0 = var7.getOptions;
                    var0 = var0.bind(var7)();
                    var _closure3_slot4 = var0;
                    var6 = var0.sampleRate;
                    var0 = _closure1_slot6;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var8);
                    var _closure3_slot5 = var0;
                    var0 = _closure1_slot5;
                    var3 = var0.bind(var5)(var8);
                    var4 = var8.type;
                    if (var4) {
                        _fun99466_ip = 89;
                        continue _fun99466
                    }
                case 85:
                    var4 = 'error';
                case 89:
                    var0 = global;
                    var11 = var0.HermesInternal;
                    var13 = var11.concat;
                    var12 = 'before send for type `';
                    var11 = '`';
                    var11 = var13.bind(var12)(var4, var11);
                    var _closure3_slot6 = var11;
                    var11 = undefined;
                    if (!(var11 !== var6)) {
                        _fun99466_ip = 159;
                        continue _fun99466
                    }
                case 128:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot1;
                    var12 = 12;
                    var12 = var14[var12];
                    var13 = var13.bind(var5)(var12);
                    var12 = var13.parseSampleRate;
                    var11 = var12.bind(var13)(var6);
                case 159:
                    if (!var3) {
                        _fun99466_ip = 193;
                        continue _fun99466
                    }
                case 162:
                    var12 = 'number';
                    var3 = typeof var11;
                    if (!(var12 === var3)) {
                        _fun99466_ip = 193;
                        continue _fun99466
                    }
                case 173:
                    var12 = var0.Math;
                    var3 = var12.random;
                    var3 = var3.bind(var12)();
                    if (!(!(var3 > var11))) {
                        _fun99466_ip = 307;
                        continue _fun99466
                    }
                case 193:
                    var3 = 'replay';
                    var11 = 'replay_event';
                    if (!(var11 !== var4)) {
                        _fun99466_ip = 208;
                        continue _fun99466
                    }
                case 205:
                    var3 = var4;
                case 208:
                    var _closure3_slot7 = var3;
                    var3 = var8.sdkProcessingMetadata;
                    if (var3) {
                        _fun99466_ip = 223;
                        continue _fun99466
                    }
                case 221:
                    var3 = {};
                case 223:
                    var15 = var3.capturedSpanIsolationScope;
                    var3 = var7._prepareEvent;
                    var19 = var7;
                    var18 = var8;
                    var17 = var10;
                    var16 = var9;
                    var9 = var19[var3](var18, var17, var16, var15, var14);
                    var4 = var9.then;
                    var3 = function(arg0) { // Environment: var2
                        _fun99467: for (var _fun99467_ip = 0;;) switch (_fun99467_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = null;
                                if (!(var1 !== var0)) {
                                    _fun99467_ip = 349;
                                    continue _fun99467
                                }
                            case 12:
                                var2 = _closure3_slot1;
                                var2 = var2.data;
                                if (!var2) {
                                    _fun99467_ip = 51;
                                    continue _fun99467
                                }
                            case 27:
                                var2 = _closure3_slot1;
                                var2 = var2.data;
                                var3 = var2.__sentry__;
                                var2 = true;
                                if (!(var2 !== var3)) {
                                    _fun99467_ip = 347;
                                    continue _fun99467
                                }
                            case 51:
                                var2 = _closure3_slot3;
                                var3 = _closure3_slot4;
                                var5 = _closure3_slot1;
                                var12 = var2;
                                var4 = undefined;
                                var13 = undefined;
                                var7 = undefined;
                                var14 = undefined;
                                var2 = var3.beforeSend;
                                var6 = var3.beforeSendTransaction;
                                var13 = var3.beforeSendSpan;
                                var8 = _closure1_slot5;
                                var8 = var8.bind(var4)(var0);
                                if (!var8) {
                                    _fun99467_ip = 113;
                                    continue _fun99467
                                }
                            case 107:
                                if (var2) {
                                    _fun99467_ip = 320;
                                    continue _fun99467
                                }
                            case 113:
                                var3 = _closure1_slot6;
                                var8 = var3.bind(var4)(var0);
                                var3 = var0;
                                if (!var8) {
                                    _fun99467_ip = 326;
                                    continue _fun99467
                                }
                            case 131:
                                var8 = var0.spans;
                                if (!var8) {
                                    _fun99467_ip = 245;
                                    continue _fun99467
                                }
                            case 140:
                                var8 = var13;
                                if (!var8) {
                                    _fun99467_ip = 245;
                                    continue _fun99467
                                }
                            case 146:
                                var7 = new Array(0);
                                var8 = var0.spans;
                                var11 = var8;
                                var9 = var11[Symbol.iterator];
                                var11 = var9().next;
                                var10 = 'before_send';
                                var8 = 'span';
                            case 172:
                                var16 = var11().value;
                                var15 = var9;
                                if (!(var15 !== var4)) {
                                    _fun99467_ip = 239;
                                    continue _fun99467
                                }
                            case 183: // try_start_0
                                var15 = var13;
                                var15 = var15.bind(var4)(var16);
                                var14 = var15;
                                if (var15) {
                                    _fun99467_ip = 214;
                                    continue _fun99467
                                }
                            case 197:
                                var16 = var12;
                                var15 = var16.recordDroppedEvent;
                                var15 = var15.bind(var16)(var10, var8);
                                _fun99467_ip = 230;
                                continue _fun99467;
                            case 214:
                                var17 = var7;
                                var16 = var17.push;
                                var15 = var14;
                                var15 = var16.bind(var17)(var15);
                            case 230: // try_end0
                                _fun99467_ip = 172;
                                continue _fun99467;
                            case 232: // catch_target0
                                CatchBlockStart(arg_register = 8);
                                var9.return();
                                throw var8;
                            case 239:
                                var0.spans = var7;
                            case 245:
                                var3 = var0;
                                if (!var6) {
                                    _fun99467_ip = 326;
                                    continue _fun99467
                                }
                            case 251:
                                var7 = var0.spans;
                                if (!var7) {
                                    _fun99467_ip = 312;
                                    continue _fun99467
                                }
                            case 260:
                                var7 = var0.spans;
                                var7 = var7.length;
                                var8 = global;
                                var11 = var8.Object;
                                var10 = var11.assign;
                                var9 = var0.sdkProcessingMetadata;
                                var8 = {};
                                var8.spanCountBeforeProcessing = var7;
                                var7 = {};
                                var7 = var10.bind(var11)(var7, var9, var8);
                                var0.sdkProcessingMetadata = var7;
                            case 312:
                                var3 = var6.bind(var4)(var0, var5);
                                _fun99467_ip = 326;
                                continue _fun99467;
                            case 320:
                                var3 = var2.bind(var4)(var0, var5);
                            case 326:
                                var2 = _closure3_slot6;
                                var1 = function arg0, arg1() {
                                    _fun99468: for (var _fun99468_ip = 0;;) switch (_fun99468_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var5 = arg1;
                                            var _closure5_slot0 = var5;
                                            var1 = global;
                                            var1 = var1.HermesInternal;
                                            var4 = var1.concat;
                                            var2 = '';
                                            var1 = ' must return `null` or a valid event.';
                                            var4 = var4.bind(var2)(var5, var1);
                                            var _closure5_slot1 = var4;
                                            var7 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var6 = 3;
                                            var2 = var2[var6];
                                            var5 = undefined;
                                            var7 = var7.bind(var5)(var2);
                                            var2 = var7.isThenable;
                                            var2 = var2.bind(var7)(var3);
                                            if (var2) {
                                                _fun99468_ip = 171;
                                                continue _fun99468
                                            }
                                        case 84:
                                            var7 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var2 = var2[var6];
                                            var7 = var7.bind(var5)(var2);
                                            var2 = var7.isPlainObject;
                                            var2 = var2.bind(var7)(var3);
                                            if (var2) {
                                                _fun99468_ip = 169;
                                                continue _fun99468
                                            }
                                        case 115:
                                            var2 = null;
                                            if (!(var2 !== var3)) {
                                                _fun99468_ip = 169;
                                                continue _fun99468
                                            }
                                        case 121:
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot1;
                                            var1 = var1[var6];
                                            var1 = var2.bind(var5)(var1);
                                            var1 = var1.SentryError;
                                            var2 = var1.prototype;
                                            var2 = Object.create(var2, {
                                                constructor: {
                                                    value: var1
                                                }
                                            });
                                            var10 = var2;
                                            var9 = var4;
                                            var1 = new var10[var1](var9, var8);
                                            var1 = var1 instanceof Object ? var1 : var2;
                                            throw var1;
                                        case 169:
                                            return var3;
                                        case 171:
                                            var2 = var3.then;
                                            var1 = function(arg0) { // Environment: var0
                                                _fun99469: for (var _fun99469_ip = 0;;) switch (_fun99469_ip) {
                                                    case 0:
                                                        var0 = arg0;
                                                        var5 = _closure1_slot0;
                                                        var2 = _closure1_slot1;
                                                        var4 = 3;
                                                        var2 = var2[var4];
                                                        var3 = undefined;
                                                        var5 = var5.bind(var3)(var2);
                                                        var2 = var5.isPlainObject;
                                                        var2 = var2.bind(var5)(var0);
                                                        if (var2) {
                                                            _fun99469_ip = 100;
                                                            continue _fun99469
                                                        }
                                                    case 42:
                                                        var2 = null;
                                                        if (!(var2 !== var0)) {
                                                            _fun99469_ip = 100;
                                                            continue _fun99469
                                                        }
                                                    case 48:
                                                        var2 = _closure1_slot0;
                                                        var1 = _closure1_slot1;
                                                        var1 = var1[var4];
                                                        var1 = var2.bind(var3)(var1);
                                                        var3 = var1.SentryError;
                                                        var6 = _closure5_slot1;
                                                        var2 = var3.prototype;
                                                        var2 = Object.create(var2, {
                                                            constructor: {
                                                                value: var3
                                                            }
                                                        });
                                                        var7 = var2;
                                                        var1 = new var7[var3](var6, var5);
                                                        var1 = var1 instanceof Object ? var1 : var2;
                                                        throw var1;
                                                    case 100:
                                                        return var0;
                                                }
                                            };
                                            var0 = function(arg0) { // Environment: var0
                                                var2 = _closure1_slot0;
                                                var1 = _closure1_slot1;
                                                var0 = 3;
                                                var1 = var1[var0];
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                                var2 = var0.SentryError;
                                                var5 = _closure5_slot0;
                                                var0 = global;
                                                var0 = var0.HermesInternal;
                                                var4 = var0.concat;
                                                var3 = '';
                                                var1 = ' rejected with ';
                                                var0 = arg0;
                                                var8 = var4.bind(var3)(var5, var1, var0);
                                                var1 = var2.prototype;
                                                var1 = Object.create(var1, {
                                                    constructor: {
                                                        value: var2
                                                    }
                                                });
                                                var9 = var1;
                                                var0 = new var9[var2](var8, var7);
                                                var0 = var0 instanceof Object ? var0 : var1;
                                                throw var0;
                                            };
                                            var0 = var2.bind(var3)(var1, var0);
                                            return var0;
                                    }
                                };
                                var1 = var1.bind(var4)(var3, var2);
                                return var1;
                            case 347:
                                return var0;
                            case 349:
                                var4 = _closure3_slot3;
                                var3 = var4.recordDroppedEvent;
                                var2 = _closure3_slot7;
                                var1 = _closure3_slot0;
                                var0 = 'event_processor';
                                var0 = var3.bind(var4)(var0, var2, var1);
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 3;
                                var1 = var1[var0];
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                var3 = var0.SentryError;
                                var0 = var3.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var20 = 'An event processor returned `null`, will not send event.';
                                var19 = 'log';
                                var21 = var1;
                                var0 = new var21[var3](var20, var19, var18);
                                var0 = var0 instanceof Object ? var0 : var1;
                                throw var0;
                        }
                    };
                    var9 = var4.bind(var9)(var3);
                    var4 = var9.then;
                    var3 = function(arg0) { // Environment: var2
                        _fun99471: for (var _fun99471_ip = 0;;) switch (_fun99471_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = null;
                                if (!(var1 !== var0)) {
                                    _fun99471_ip = 256;
                                    continue _fun99471
                                }
                            case 12:
                                var4 = _closure3_slot2;
                                if (!var4) {
                                    _fun99471_ip = 36;
                                    continue _fun99471
                                }
                            case 22:
                                var3 = _closure3_slot2;
                                var2 = var3.getSession;
                                var4 = var2.bind(var3)();
                            case 36:
                                var3 = _closure3_slot5;
                                var2 = !var3;
                                if (var3) {
                                    _fun99471_ip = 49;
                                    continue _fun99471
                                }
                            case 46:
                                var2 = var4;
                            case 49:
                                if (!var2) {
                                    _fun99471_ip = 68;
                                    continue _fun99471
                                }
                            case 52:
                                var3 = _closure3_slot3;
                                var2 = var3._updateSessionFromEvent;
                                var2 = var2.bind(var3)(var4, var0);
                            case 68:
                                var2 = _closure3_slot5;
                                if (!var2) {
                                    _fun99471_ip = 160;
                                    continue _fun99471
                                }
                            case 75:
                                var4 = var0.sdkProcessingMetadata;
                                if (!var4) {
                                    _fun99471_ip = 96;
                                    continue _fun99471
                                }
                            case 84:
                                var2 = var0.sdkProcessingMetadata;
                                var4 = var2.spanCountBeforeProcessing;
                            case 96:
                                if (var4) {
                                    _fun99471_ip = 101;
                                    continue _fun99471
                                }
                            case 99:
                                var4 = 0;
                            case 101:
                                var5 = var0.spans;
                                var2 = 0;
                                var3 = 0;
                                if (!var5) {
                                    _fun99471_ip = 125;
                                    continue _fun99471
                                }
                            case 114:
                                var5 = var0.spans;
                                var3 = var5.length;
                            case 125:
                                var6 = var4 - var3;
                                if (!(var6 > var2)) {
                                    _fun99471_ip = 160;
                                    continue _fun99471
                                }
                            case 133:
                                var5 = _closure3_slot3;
                                var4 = var5.recordDroppedEvent;
                                var3 = 'before_send';
                                var2 = 'span';
                                var2 = var4.bind(var5)(var3, var2, var6);
                            case 160:
                                var6 = var0.transaction_info;
                                var2 = _closure3_slot5;
                                if (!var2) {
                                    _fun99471_ip = 234;
                                    continue _fun99471
                                }
                            case 173:
                                if (!var6) {
                                    _fun99471_ip = 234;
                                    continue _fun99471
                                }
                            case 176:
                                var3 = var0.transaction;
                                var2 = _closure3_slot0;
                                var2 = var2.transaction;
                                if (!(var3 !== var2)) {
                                    _fun99471_ip = 234;
                                    continue _fun99471
                                }
                            case 196:
                                var2 = global;
                                var5 = var2.Object;
                                var4 = var5.assign;
                                var3 = {};
                                var2 = 'custom';
                                var3.source = var2;
                                var2 = {};
                                var2 = var4.bind(var5)(var2, var6, var3);
                                var0.transaction_info = var2;
                            case 234:
                                var3 = _closure3_slot3;
                                var2 = var3.sendEvent;
                                var1 = _closure3_slot1;
                                var1 = var2.bind(var3)(var0, var1);
                                return var0;
                            case 256:
                                var4 = _closure3_slot3;
                                var3 = var4.recordDroppedEvent;
                                var2 = _closure3_slot7;
                                var1 = _closure3_slot0;
                                var5 = 'before_send';
                                var1 = var3.bind(var4)(var5, var2, var1);
                                var1 = _closure3_slot5;
                                if (!var1) {
                                    _fun99471_ip = 347;
                                    continue _fun99471
                                }
                            case 297:
                                var1 = _closure3_slot0;
                                var1 = var1.spans;
                                if (var1) {
                                    _fun99471_ip = 314;
                                    continue _fun99471
                                }
                            case 310:
                                var1 = new Array(0);
                            case 314:
                                var2 = var1.length;
                                var1 = 1;
                                var4 = var1 + var2;
                                var3 = _closure3_slot3;
                                var2 = var3.recordDroppedEvent;
                                var1 = 'span';
                                var1 = var2.bind(var3)(var5, var1, var4);
                            case 347:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 3;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var3 = var1.SentryError;
                                var4 = _closure3_slot6;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var2 = var0.concat;
                                var1 = '';
                                var0 = ' returned `null`, will not send event.';
                                var9 = var2.bind(var1)(var4, var0);
                                var0 = var3.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var8 = 'log';
                                var10 = var1;
                                var0 = new var10[var3](var9, var8, var7);
                                var0 = var0 instanceof Object ? var0 : var1;
                                throw var0;
                        }
                    };
                    var9 = var4.bind(var9)(var3);
                    var4 = var9.then;
                    var3 = null;
                    var2 = function(arg0) { // Environment: var2
                        _fun99472: for (var _fun99472_ip = 0;;) switch (_fun99472_ip) {
                            case 0:
                                var0 = arg0;
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var4 = 3;
                                var2 = var2[var4];
                                var3 = undefined;
                                var2 = var5.bind(var3)(var2);
                                var2 = var2.SentryError;
                                var2 = var0 instanceof var2;
                                if (var2) {
                                    _fun99472_ip = 149;
                                    continue _fun99472
                                }
                            case 41:
                                var6 = _closure3_slot3;
                                var5 = var6.captureException;
                                var2 = {};
                                var7 = {};
                                var8 = true;
                                var7.__sentry__ = var8;
                                var2.data = var7;
                                var2.originalException = var0;
                                var2 = var5.bind(var6)(var0, var2);
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var1 = var1[var4];
                                var1 = var2.bind(var3)(var1);
                                var3 = var1.SentryError;
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var2 = var1.concat;
                                var1 = 'Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ';
                                var10 = var2.bind(var1)(var0);
                                var2 = var3.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var11 = var2;
                                var1 = new var11[var3](var10, var9);
                                var1 = var1 instanceof Object ? var1 : var2;
                                throw var1;
                            case 149:
                                throw var0;
                        }
                    };
                    var2 = var4.bind(var9)(var3, var2);
                    return var2;
                case 307:
                    var4 = var7.recordDroppedEvent;
                    var3 = 'sample_rate';
                    var2 = 'error';
                    var2 = var4.bind(var7)(var3, var2, var8);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 3;
                    var1 = var7[var3];
                    var2 = var4.bind(var5)(var1);
                    var1 = var2.rejectedSyncPromise;
                    var3 = var7[var3];
                    var3 = var4.bind(var5)(var3);
                    var5 = var3.SentryError;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var3 = "Discarding event because it's not included in the random sample (sampling rate = ";
                    var0 = ')';
                    var18 = var4.bind(var3)(var6, var0);
                    var0 = var5.prototype;
                    var3 = Object.create(var0, {
                        constructor: {
                            value: var5
                        }
                    });
                    var17 = 'log';
                    var19 = var3;
                    var0 = new var19[var5](var18, var17, var16);
                    var0 = var0 instanceof Object ? var0 : var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[27] = var0;
        var0 = {};
        var5 = '_process';
        var0.key = var5;
        var5 = function arg0() {
            var3 = arg0;
            var2 = this;
            var _closure3_slot0 = var2;
            var1 = var2._numProcessing;
            var1 = var1 + 1;
            var2._numProcessing = var1;
            var2 = var3.then;
            var1 = function(arg0) { // Environment: var0
                var1 = _closure3_slot0;
                var0 = var1._numProcessing;
                var0 = var0 - 1;
                var1._numProcessing = var0;
                var0 = arg0;
                return var0;
            };
            var0 = function(arg0) { // Environment: var0
                var1 = _closure3_slot0;
                var0 = var1._numProcessing;
                var0 = var0 - 1;
                var1._numProcessing = var0;
                var0 = arg0;
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[28] = var0;
        var0 = {};
        var5 = '_clearOutcomes';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var2 = var1._outcomes;
            var0 = {};
            var1._outcomes = var0;
            var0 = global;
            var1 = var0.Object;
            var0 = var1.entries;
            var2 = var0.bind(var1)(var2);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var6 = _closure1_slot2;
                var5 = undefined;
                var0 = arg0;
                var2 = 2;
                var0 = var6.bind(var5)(var0, var2);
                var4 = 0;
                var8 = var0[var4];
                var3 = 1;
                var1 = var0[var3];
                var7 = var8.split;
                var0 = ':';
                var0 = var7.bind(var8)(var0);
                var2 = var6.bind(var5)(var0, var2);
                var0 = {};
                var4 = var2[var4];
                var0.reason = var4;
                var2 = var2[var3];
                var0.category = var2;
                var0.quantity = var1;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[29] = var0;
        var0 = {};
        var5 = '_flushOutcomes';
        var0.key = var5;
        var4 = function() {
            _fun99478: for (var _fun99478_ip = 0;;) switch (_fun99478_ip) {
                case 0:
                    var3 = this;
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var7 = 4;
                    var1 = var0[var7];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.DEBUG_BUILD;
                    if (!var1) {
                        _fun99478_ip = 79;
                        continue _fun99478
                    }
                case 37:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 3;
                    var1 = var4[var1];
                    var1 = var2.bind(var0)(var1);
                    var4 = var1.logger;
                    var2 = var4.log;
                    var1 = 'Flushing outcomes...';
                    var1 = var2.bind(var4)(var1);
                case 79:
                    var1 = var3._clearOutcomes;
                    var5 = var1.bind(var3)();
                    var2 = var5.length;
                    var1 = 0;
                    if (!(var1 === var2)) {
                        _fun99478_ip = 176;
                        continue _fun99478
                    }
                case 100:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var7];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.DEBUG_BUILD;
                    if (!var1) {
                        _fun99478_ip = 399;
                        continue _fun99478
                    }
                case 129:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 3;
                    var1 = var4[var1];
                    var1 = var2.bind(var0)(var1);
                    var4 = var1.logger;
                    var2 = var4.log;
                    var1 = 'No outcomes to send';
                    var1 = var2.bind(var4)(var1);
                    _fun99478_ip = 399;
                    continue _fun99478;
                case 176:
                    var2 = var3._dsn;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var7];
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.DEBUG_BUILD;
                    if (var2) {
                        _fun99478_ip = 261;
                        continue _fun99478
                    }
                case 208:
                    if (!var1) {
                        _fun99478_ip = 399;
                        continue _fun99478
                    }
                case 214:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 3;
                    var2 = var7[var2];
                    var2 = var4.bind(var0)(var2);
                    var7 = var2.logger;
                    var4 = var7.log;
                    var2 = 'No dsn provided, will not send outcomes';
                    var2 = var4.bind(var7)(var2);
                    _fun99478_ip = 399;
                    continue _fun99478;
                case 261:
                    if (!var1) {
                        _fun99478_ip = 307;
                        continue _fun99478
                    }
                case 264:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 3;
                    var1 = var4[var1];
                    var1 = var2.bind(var0)(var1);
                    var4 = var1.logger;
                    var2 = var4.log;
                    var1 = 'Sending outcomes:';
                    var1 = var2.bind(var4)(var1, var5);
                case 307:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var8 = 3;
                    var1 = var1[var8];
                    var4 = var2.bind(var0)(var1);
                    var2 = var4.createClientReportEnvelope;
                    var1 = var3._options;
                    var1 = var1.tunnel;
                    if (!var1) {
                        _fun99478_ip = 382;
                        continue _fun99478
                    }
                case 348:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var8];
                    var8 = var7.bind(var0)(var6);
                    var7 = var8.dsnToString;
                    var6 = var3._dsn;
                    var1 = var7.bind(var8)(var6);
                case 382:
                    var2 = var2.bind(var4)(var5, var1);
                    var1 = var3.sendEnvelope;
                    var1 = var1.bind(var3)(var2);
                case 399:
                    return var0;
            }
        };
        var0.value = var4;
        var1[30] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.BaseClient = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 12869, 12935, 12956, 12932, 12958, 12950, 12934, 12952, 12943, 12947]);