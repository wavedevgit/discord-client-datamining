// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var4;
    var6 = function() { // Original name: getDefaultIdleNavigationSpanOptions, environment: var1
        var0 = {
            'name': null,
            'op': 'navigation',
            'forceTransaction': true
        };
        var2 = _closure1_slot3;
        var0.name = var2;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.getCurrentScope;
        var1 = var1.bind(var2)();
        var0.scope = var1;
        return var0;
    };
    var _closure1_slot7 = var6;
    var5 = function(arg0) { // Original name: isSentryInteractionSpan, environment: var1
        _fun12608: for (var _fun12608_ip = 0;;) switch (_fun12608_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 4;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var1 = var1.SPAN_ORIGIN_AUTO_INTERACTION;
                var2 = new Array(2);
                var2[0] = var1;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.SPAN_ORIGIN_MANUAL_INTERACTION;
                var2[1] = var0;
                var1 = var2.includes;
                var0 = 1;
                var0 = var5[var0];
                var4 = var4.bind(var3)(var0);
                var3 = var4.spanToJSON;
                var0 = arg0;
                var0 = var3.bind(var4)(var0);
                var0 = var0.origin;
                if (var0) {
                    _fun12608_ip = 102;
                    continue _fun12608
                }
            case 98:
                var0 = '';
            case 102:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot8 = var5;
    var3 = function(arg0) { // Original name: clearActiveSpanFromScope, environment: var1
        var1 = _closure1_slot6;
        var0 = arg0;
        var0 = delete var0[var1];
        var0 = undefined;
        return var0;
    };
    var _closure1_slot9 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var8);
    var0 = 0;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var4 = var4.AppState;
    var _closure1_slot2 = var4;
    var9 = 'Route Change';
    var _closure1_slot3 = var9;
    var8 = {
        'idleTimeout': 1000,
        'finalTimeout': 600000
    };
    var _closure1_slot4 = var8;
    var7 = function(arg0, arg1) { // Original name: startIdleSpan, environment: var1
        _fun12610: for (var _fun12610_ip = 0;;) switch (_fun12610_ip) {
            case 0:
                var4 = arg0;
                var0 = arg1;
                var11 = var0.finalTimeout;
                var10 = var0.idleTimeout;
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = 1;
                var1 = var1[var3];
                var2 = undefined;
                var5 = var5.bind(var2)(var1);
                var1 = var5.getClient;
                var7 = var1.bind(var5)();
                if (var7) {
                    _fun12610_ip = 132;
                    continue _fun12610
                }
            case 56:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = var1[var3];
                var6 = var5.bind(var2)(var6);
                var9 = var6.debug;
                var8 = var9.warn;
                var6 = "[startIdleSpan] Can't create idle span, missing client.";
                var6 = var8.bind(var9)(var6);
                var1 = var1[var3];
                var1 = var5.bind(var2)(var1);
                var1 = var1.SentryNonRecordingSpan;
                var5 = var1.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var1
                    }
                });
                var16 = var5;
                var1 = new var16[var1](var15);
                var1 = var1 instanceof Object ? var1 : var5;
                return var1;
            case 132:
                var1 = _closure1_slot2;
                var5 = var1.currentState;
                var1 = 'background';
                if (!(var1 !== var5)) {
                    _fun12610_ip = 299;
                    continue _fun12610
                }
            case 153:
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = var8[var3];
                var5 = var6.bind(var2)(var1);
                var1 = var5.getCurrentScope;
                var9 = var1.bind(var5)();
                var5 = var9.setPropagationContext;
                var1 = {};
                var12 = var8[var3];
                var13 = var6.bind(var2)(var12);
                var12 = var13.generateTraceId;
                var12 = var12.bind(var13)();
                var1.traceId = var12;
                var12 = global;
                var13 = var12.Math;
                var12 = var13.random;
                var12 = var12.bind(var13)();
                var1.sampleRand = var12;
                var1 = var5.bind(var9)(var1);
                var1 = var8[var3];
                var9 = var6.bind(var2)(var1);
                var5 = var9.startIdleSpan;
                var1 = {};
                var1.finalTimeout = var11;
                var1.idleTimeout = var10;
                var1 = var5.bind(var9)(var4, var1);
                var5 = 3;
                var5 = var8[var5];
                var6 = var6.bind(var2)(var5);
                var5 = var6.cancelInBackground;
                var5 = var5.bind(var6)(var7, var1);
                return var1;
            case 299:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = var0[var3];
                var5 = var1.bind(var2)(var5);
                var6 = var5.debug;
                var5 = var6.log;
                var8 = var4.name;
                var4 = global;
                var4 = var4.HermesInternal;
                var7 = var4.concat;
                var4 = '[startIdleSpan] App is already in background, not starting span for ';
                var4 = var7.bind(var4)(var8);
                var4 = var5.bind(var6)(var4);
                var0 = var0[var3];
                var0 = var1.bind(var2)(var0);
                var0 = var0.SentryNonRecordingSpan;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var16 = var1;
                var0 = new var16[var0](var15);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot5 = var7;
    var4 = '_sentrySpan';
    var _closure1_slot6 = var4;
    var2.DEFAULT_NAVIGATION_SPAN_NAME = var9;
    var2.defaultIdleOptions = var8;
    var8 = function(arg0) { // Original name: startIdleNavigationSpan, environment: var1
        _fun12611: for (var _fun12611_ip = 0;;) switch (_fun12611_ip) {
            case 0:
                var5 = undefined;
                var2 = undefined;
                var0 = arguments.length;
                var1 = 1;
                if (!(var0 > var1)) {
                    _fun12611_ip = 22;
                    continue _fun12611
                }
            case 14:
                var0 = arguments[var1];
                if (!(var5 === var0)) {
                    _fun12611_ip = 26;
                    continue _fun12611
                }
            case 22:
                var0 = {};
                _fun12611_ip = 30;
                continue _fun12611;
            case 26:
                var0 = arguments[var1];
            case 30:
                var8 = var0.finalTimeout;
                if (!(var5 === var8)) {
                    _fun12611_ip = 53;
                    continue _fun12611
                }
            case 40:
                var2 = _closure1_slot4;
                var8 = var2.finalTimeout;
            case 53:
                var6 = var0.idleTimeout;
                if (!(var5 === var6)) {
                    _fun12611_ip = 76;
                    continue _fun12611
                }
            case 63:
                var2 = _closure1_slot4;
                var6 = var2.idleTimeout;
            case 76:
                var0 = var0.isAppRestart;
                var3 = var5 !== var0;
                if (!var3) {
                    _fun12611_ip = 92;
                    continue _fun12611
                }
            case 89:
                var3 = var0;
            case 92:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var1];
                var4 = var4.bind(var5)(var0);
                var0 = var4.getClient;
                var7 = var0.bind(var4)();
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var1];
                var4 = var4.bind(var5)(var0);
                if (var7) {
                    _fun12611_ip = 166;
                    continue _fun12611
                }
            case 142:
                var10 = var4.debug;
                var9 = var10.warn;
                var0 = "[startIdleNavigationSpan] Can't create route change span, missing client.";
                var0 = var9.bind(var10)(var0);
                return var5;
            case 166:
                var0 = var4.getActiveSpan;
                var10 = var0.bind(var4)();
                var0 = var10;
                if (!var0) {
                    _fun12611_ip = 213;
                    continue _fun12611
                }
            case 182:
                var9 = _closure1_slot0;
                var11 = _closure1_slot1;
                var4 = 2;
                var4 = var11[var4];
                var9 = var9.bind(var5)(var4);
                var4 = var9.isRootSpan;
                var0 = var4.bind(var9)(var10);
            case 213:
                if (!var0) {
                    _fun12611_ip = 225;
                    continue _fun12611
                }
            case 216:
                var4 = _closure1_slot8;
                var0 = var4.bind(var5)(var10);
            case 225:
                var9 = _closure1_slot9;
                var11 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var1];
                var11 = var11.bind(var5)(var4);
                var4 = var11.getCurrentScope;
                var4 = var4.bind(var11)();
                var4 = var9.bind(var5)(var4);
                if (!var0) {
                    _fun12611_ip = 270;
                    continue _fun12611
                }
            case 264:
                if (var3) {
                    _fun12611_ip = 416;
                    continue _fun12611
                }
            case 270:
                if (!var0) {
                    _fun12611_ip = 505;
                    continue _fun12611
                }
            case 276:
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = var4[var1];
                var0 = var9.bind(var5)(var0);
                var11 = var0.debug;
                var3 = var11.log;
                var0 = var4[var1];
                var12 = var9.bind(var5)(var0);
                var0 = var12.spanToJSON;
                var0 = var0.bind(var12)(var10);
                var14 = var0.op;
                var0 = global;
                var0 = var0.HermesInternal;
                var13 = var0.concat;
                var12 = '[startIdleNavigationSpan] Canceling ';
                var0 = ' transaction because of a new navigation root span.';
                var0 = var13.bind(var12)(var14, var0);
                var0 = var3.bind(var11)(var0);
                var3 = var10.setStatus;
                var0 = {};
                var4 = var4[var1];
                var4 = var9.bind(var5)(var4);
                var4 = var4.SPAN_STATUS_ERROR;
                var0.code = var4;
                var4 = 'cancelled';
                var0.message = var4;
                var0 = var3.bind(var10)(var0);
                var0 = var10.end;
                var0 = var0.bind(var10)();
                _fun12611_ip = 505;
                continue _fun12611;
            case 416:
                var9 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = var0[var1];
                var3 = var9.bind(var5)(var3);
                var4 = var3.debug;
                var3 = var4.log;
                var0 = var0[var1];
                var9 = var9.bind(var5)(var0);
                var0 = var9.spanToJSON;
                var0 = var0.bind(var9)(var10);
                var11 = var0.op;
                var0 = global;
                var0 = var0.HermesInternal;
                var10 = var0.concat;
                var9 = '[startIdleNavigationSpan] Not canceling ';
                var0 = ' transaction because navigation is from app restart - preserving error context.';
                var0 = var10.bind(var9)(var11, var0);
                var0 = var3.bind(var4)(var0);
            case 505:
                var3 = global;
                var10 = var3.Object;
                var9 = var10.assign;
                var12 = var3.Object;
                var11 = var12.assign;
                var0 = _closure1_slot7;
                var4 = var0.bind(var5)();
                var0 = {};
                var4 = var11.bind(var12)(var0, var4);
                var0 = arg0;
                var9 = var9.bind(var10)(var4, var0);
                var4 = _closure1_slot5;
                var0 = {};
                var0.finalTimeout = var8;
                var0.idleTimeout = var6;
                var0 = var4.bind(var5)(var9, var0);
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var1];
                var4 = var6.bind(var5)(var4);
                var6 = var4.debug;
                var4 = var6.log;
                var13 = var9.op;
                if (var13) {
                    _fun12611_ip = 618;
                    continue _fun12611
                }
            case 612:
                var13 = 'unknown op';
            case 618:
                var16 = var9.name;
                var3 = var3.HermesInternal;
                var11 = var3.concat;
                var19 = '[startIdleNavigationSpan] Starting ';
                var17 = ' transaction "';
                var15 = '" on scope';
                var18 = var13;
                var3 = var19[var11](var18, var17, var16, var15, var14);
                var3 = var4.bind(var6)(var3);
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 3;
                var2 = var6[var2];
                var3 = var4.bind(var5)(var2);
                var2 = var3.adjustTransactionDuration;
                var2 = var2.bind(var3)(var7, var0, var8);
                var3 = var0.setAttribute;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var2 = var1.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var1 = 4;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.SPAN_ORIGIN_AUTO_NAVIGATION_CUSTOM;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var2.startIdleNavigationSpan = var8;
    var2.startIdleSpan = var7;
    var2.getDefaultIdleNavigationSpanOptions = var6;
    var2.isSentryInteractionSpan = var5;
    var2.SCOPE_SPAN_FIELD = var4;
    var2.clearActiveSpanFromScope = var3;
    var3 = function(arg0) { // Original name: addDefaultOpForSpanFrom, environment: var1
        var3 = arg0;
        var2 = var3.on;
        var1 = 'spanStart';
        var0 = function(arg0) { // Environment: var0
            _fun12613: for (var _fun12613_ip = 0;;) switch (_fun12613_ip) {
                case 0:
                    var4 = arg0;
                    var3 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var5 = 1;
                    var2 = var0[var5];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.spanToJSON;
                    var2 = var2.bind(var3)(var4);
                    var2 = var2.op;
                    if (var2) {
                        _fun12613_ip = 86;
                        continue _fun12613
                    }
                case 47:
                    var3 = var4.setAttribute;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var5];
                    var1 = var2.bind(var0)(var1);
                    var2 = var1.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                    var1 = 'default';
                    var1 = var3.bind(var4)(var2, var1);
                case 86:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var2.addDefaultOpForSpanFrom = var3;
    var3 = 'thread.name';
    var2.SPAN_THREAD_NAME = var3;
    var3 = 'main';
    var2.SPAN_THREAD_NAME_MAIN = var3;
    var3 = 'javascript';
    var2.SPAN_THREAD_NAME_JAVASCRIPT = var3;
    var3 = function(arg0) { // Original name: addThreadInfoToSpan, environment: var1
        var3 = arg0;
        var2 = var3.on;
        var1 = 'spanStart';
        var0 = function(arg0) { // Environment: var0
            _fun12615: for (var _fun12615_ip = 0;;) switch (_fun12615_ip) {
                case 0:
                    var4 = arg0;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.spanToJSON;
                    var1 = var1.bind(var2)(var4);
                    var2 = var1.data;
                    var3 = null;
                    var1 = undefined;
                    if (!(var3 !== var2)) {
                        _fun12615_ip = 64;
                        continue _fun12615
                    }
                case 52:
                    var1 = undefined;
                    if (!(var1 !== var2)) {
                        _fun12615_ip = 64;
                        continue _fun12615
                    }
                case 58:
                    var1 = var2["thread.name"];
                case 64:
                    if (var1) {
                        _fun12615_ip = 87;
                        continue _fun12615
                    }
                case 67:
                    var3 = var4.setAttribute;
                    var2 = 'thread.name';
                    var1 = 'javascript';
                    var1 = var3.bind(var4)(var2, var1);
                case 87:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var2.addThreadInfoToSpan = var3;
    var1 = function(arg0) { // Original name: setMainThreadInfo, environment: var1
        _fun12616: for (var _fun12616_ip = 0;;) switch (_fun12616_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.data;
                if (var1) {
                    _fun12616_ip = 13;
                    continue _fun12616
                }
            case 11:
                var1 = {};
            case 13:
                var0.data = var1;
                var2 = var0.data;
                var1 = 'main';
                var2['thread.name'] = var1;
                return var0;
        }
    };
    var2.setMainThreadInfo = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 817, 1118, 1160, 1157]);