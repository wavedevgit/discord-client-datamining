// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() {
            _fun9004: for (var _fun9004_ip = 0;;) switch (_fun9004_ip) {
                case 0:
                    var2 = this;
                    var0 = undefined;
                    var4 = undefined;
                    var1 = arguments.length;
                    var3 = 0;
                    if (!(var1 > var3)) {
                        _fun9004_ip = 24;
                        continue _fun9004
                    }
                case 16:
                    var1 = arguments[var3];
                    if (!(var0 === var1)) {
                        _fun9004_ip = 28;
                        continue _fun9004
                    }
                case 24:
                    var1 = {};
                    _fun9004_ip = 32;
                    continue _fun9004;
                case 28:
                    var1 = arguments[var3];
                case 32:
                    var5 = _closure1_slot2;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var0)(var2, var4);
                    var4 = var1.traceId;
                    if (var4) {
                        _fun9004_ip = 91;
                        continue _fun9004
                    }
                case 61:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 2;
                    var5 = var7[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.generateTraceId;
                    var4 = var5.bind(var6)();
                case 91:
                    var2._traceId = var4;
                    var1 = var1.spanId;
                    if (var1) {
                        _fun9004_ip = 136;
                        continue _fun9004
                    }
                case 106:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 2;
                    var3 = var5[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.generateSpanId;
                    var1 = var3.bind(var4)();
                case 136:
                    var2._spanId = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'spanContext';
        var0.key = var1;
        var1 = function() {
            var1 = this;
            var0 = {};
            var2 = var1._spanId;
            var0.spanId = var2;
            var1 = var1._traceId;
            var0.traceId = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.TRACE_FLAG_NONE;
            var0.traceFlags = var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(11);
        var1[0] = var0;
        var0 = {};
        var5 = 'end';
        var0.key = var5;
        var5 = function arg0() {
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'setAttribute';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var0 = this;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'setAttributes';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'setStatus';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'updateName';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'isRecording';
        var0.key = var5;
        var5 = function() {
            var0 = false;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'addEvent';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            var0 = this;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'addLink';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'addLinks';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'recordException';
        var0.key = var5;
        var4 = function arg0, arg1() {
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[10] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.SentryNonRecordingSpan = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 829, 819]);