// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function(arg0) { // Original name: extractTraceparentData, environment: var0
        _fun58782: for (var _fun58782_ip = 0;;) switch (_fun58782_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun58782_ip = 27;
                    continue _fun58782
                }
            case 6:
                var1 = var2.match;
                var0 = _closure1_slot2;
                var2 = var1.bind(var2)(var0);
                if (var2) {
                    _fun58782_ip = 31;
                    continue _fun58782
                }
            case 27:
                var0 = undefined;
                return var0;
            case 31:
                var0 = 3;
                var4 = var2[var0];
                var3 = '1';
                var1 = true;
                if (!(var3 !== var4)) {
                    _fun58782_ip = 68;
                    continue _fun58782
                }
            case 50:
                var3 = var2[var0];
                var1 = undefined;
                var0 = '0';
                if (!(var0 === var3)) {
                    _fun58782_ip = 68;
                    continue _fun58782
                }
            case 66:
                var1 = false;
            case 68:
                var0 = {};
                var3 = 1;
                var3 = var2[var3];
                var0.traceId = var3;
                var0.parentSampled = var1;
                var1 = 2;
                var1 = var2[var1];
                var0.parentSpanId = var1;
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var3 = global;
    var7 = var3.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5.value = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var1, var4, var5);
    var5 = var3.RegExp;
    var3 = var5.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var5
        }
    });
    var10 = '^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$';
    var11 = var4;
    var3 = new var11[var5](var10, var9);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot2 = var3;
    var1.TRACEPARENT_REGEXP = var3;
    var1.extractTraceparentData = var2;
    var2 = function() { // Original name: generateSentryTraceHeader, environment: var0
        _fun58783: for (var _fun58783_ip = 0;;) switch (_fun58783_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var2 = arguments.length;
                var1 = 0;
                if (!(var2 > var1)) {
                    _fun58783_ip = 21;
                    continue _fun58783
                }
            case 13:
                var2 = arguments[var1];
                if (!(var0 === var2)) {
                    _fun58783_ip = 56;
                    continue _fun58783
                }
            case 21:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 1;
                var2 = var5[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.uuid4;
                var5 = var2.bind(var4)();
                _fun58783_ip = 60;
                continue _fun58783;
            case 56:
                var5 = arguments[var1];
            case 60:
                var2 = arguments.length;
                var1 = 1;
                if (!(var2 > var1)) {
                    _fun58783_ip = 78;
                    continue _fun58783
                }
            case 70:
                var2 = arguments[var1];
                if (!(var0 === var2)) {
                    _fun58783_ip = 124;
                    continue _fun58783
                }
            case 78:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var1];
                var4 = var4.bind(var0)(var2);
                var2 = var4.uuid4;
                var6 = var2.bind(var4)();
                var4 = var6.substring;
                var2 = 16;
                var4 = var4.bind(var6)(var2);
                _fun58783_ip = 128;
                continue _fun58783;
            case 124:
                var4 = arguments[var1];
            case 128:
                var1 = arguments.length;
                var2 = 2;
                var6 = var1 > var2;
                var1 = undefined;
                if (!var6) {
                    _fun58783_ip = 147;
                    continue _fun58783
                }
            case 143:
                var1 = arguments[var2];
            case 147:
                var3 = '';
                var2 = var3;
                if (!(var0 !== var1)) {
                    _fun58783_ip = 174;
                    continue _fun58783
                }
            case 158:
                var0 = '-0';
                if (!var1) {
                    _fun58783_ip = 171;
                    continue _fun58783
                }
            case 167:
                var0 = '-1';
            case 171:
                var2 = var0;
            case 174:
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var9 = '-';
                var11 = var3;
                var10 = var5;
                var8 = var4;
                var7 = var2;
                var0 = var11[var1](var10, var9, var8, var7, var6);
                return var0;
        }
    };
    var1.generateSentryTraceHeader = var2;
    var0 = function(arg0, arg1) { // Original name: propagationContextFromHeaders, environment: var0
        _fun58784: for (var _fun58784_ip = 0;;) switch (_fun58784_ip) {
            case 0:
                var1 = _closure1_slot3;
                var6 = undefined;
                var0 = arg0;
                var0 = var1.bind(var6)(var0);
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 0;
                var1 = var3[var1];
                var3 = var2.bind(var6)(var1);
                var2 = var3.baggageHeaderToDynamicSamplingContext;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = var0;
                if (var1) {
                    _fun58784_ip = 58;
                    continue _fun58784
                }
            case 56:
                var1 = {};
            case 58:
                var7 = var1.traceId;
                var5 = var1.parentSpanId;
                var3 = var1.parentSampled;
                if (var0) {
                    _fun58784_ip = 176;
                    continue _fun58784
                }
            case 79:
                var0 = {};
                var1 = var7;
                if (var7) {
                    _fun58784_ip = 117;
                    continue _fun58784
                }
            case 87:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var8 = 1;
                var8 = var10[var8];
                var9 = var9.bind(var6)(var8);
                var8 = var9.uuid4;
                var1 = var8.bind(var9)();
            case 117:
                var0.traceId = var1;
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 1;
                var1 = var9[var1];
                var8 = var8.bind(var6)(var1);
                var1 = var8.uuid4;
                var9 = var1.bind(var8)();
                var8 = var9.substring;
                var1 = 16;
                var1 = var8.bind(var9)(var1);
                var0.spanId = var1;
                _fun58784_ip = 335;
                continue _fun58784;
            case 176:
                var1 = {};
                if (var7) {
                    _fun58784_ip = 211;
                    continue _fun58784
                }
            case 181:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var8 = 1;
                var8 = var10[var8];
                var9 = var9.bind(var6)(var8);
                var8 = var9.uuid4;
                var7 = var8.bind(var9)();
            case 211:
                var1.traceId = var7;
                if (var5) {
                    _fun58784_ip = 263;
                    continue _fun58784
                }
            case 219:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var7 = 1;
                var7 = var9[var7];
                var8 = var8.bind(var6)(var7);
                var7 = var8.uuid4;
                var9 = var7.bind(var8)();
                var8 = var9.substring;
                var7 = 16;
                var5 = var8.bind(var9)(var7);
            case 263:
                var1.parentSpanId = var5;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 1;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.uuid4;
                var6 = var4.bind(var5)();
                var5 = var6.substring;
                var4 = 16;
                var4 = var5.bind(var6)(var4);
                var1.spanId = var4;
                var1.sampled = var3;
                if (var2) {
                    _fun58784_ip = 327;
                    continue _fun58784
                }
            case 325:
                var2 = {};
            case 327:
                var1.dsc = var2;
                var0 = var1;
            case 335:
                return var0;
        }
    };
    var1.propagationContextFromHeaders = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7163, 7152]);