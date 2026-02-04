// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function() {
        _fun10901: for (var _fun10901_ip = 0;;) switch (_fun10901_ip) {
            case 0:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 1;
                var2 = var0[var4];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var2 = var2.WINDOW;
                var2 = var2.document;
                if (!var2) {
                    _fun10901_ip = 206;
                    continue _fun10901
                }
            case 45:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var6 = 0;
                var6 = var2[var6];
                var6 = var3.bind(var0)(var6);
                var9 = var6.triggerHandlers;
                var8 = var9.bind;
                var7 = null;
                var6 = 'dom';
                var7 = var8.bind(var9)(var7, var6);
                var _closure2_slot0 = var7;
                var6 = _closure1_slot6;
                var5 = true;
                var6 = var6.bind(var0)(var7, var5);
                var5 = var2[var4];
                var5 = var3.bind(var0)(var5);
                var5 = var5.WINDOW;
                var9 = var5.document;
                var8 = var9.addEventListener;
                var7 = 'click';
                var5 = false;
                var7 = var8.bind(var9)(var7, var6, var5);
                var2 = var2[var4];
                var2 = var3.bind(var0)(var2);
                var2 = var2.WINDOW;
                var4 = var2.document;
                var3 = var4.addEventListener;
                var2 = 'keypress';
                var2 = var3.bind(var4)(var2, var6, var5);
                var3 = ['EventTarget', 'Node'];
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun10902: for (var _fun10902_ip = 0;;) switch (_fun10902_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 1;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var4 = var3.WINDOW;
                            var3 = arg0;
                            var3 = var4[var3];
                            var6 = null;
                            var4 = var6 == var3;
                            var5 = undefined;
                            if (var4) {
                                _fun10902_ip = 56;
                                continue _fun10902
                            }
                        case 51:
                            var5 = var3.prototype;
                        case 56:
                            var3 = var6 != var5;
                            if (!var3) {
                                _fun10902_ip = 73;
                                continue _fun10902
                            }
                        case 63:
                            var4 = var5.hasOwnProperty;
                            var3 = var6 != var4;
                        case 73:
                            if (!var3) {
                                _fun10902_ip = 91;
                                continue _fun10902
                            }
                        case 76:
                            var6 = var5.hasOwnProperty;
                            var4 = 'addEventListener';
                            var3 = var6.bind(var5)(var4);
                        case 91:
                            if (!var3) {
                                _fun10902_ip = 166;
                                continue _fun10902
                            }
                        case 94:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 0;
                            var6 = var4[var2];
                            var9 = var3.bind(var0)(var6);
                            var8 = var9.fill;
                            var7 = 'addEventListener';
                            var6 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var0 = function(arg0, arg1, arg2) { // Environment: var0
                                    _fun10904: for (var _fun10904_ip = 0;;) switch (_fun10904_ip) {
                                        case 0:
                                            var4 = arg0;
                                            var5 = this;
                                            var1 = var4;
                                            var0 = arg2;
                                            var6 = undefined;
                                            var2 = undefined;
                                            var3 = 'click';
                                            if (!(var3 !== var4)) {
                                                _fun10904_ip = 37;
                                                continue _fun10904
                                            }
                                        case 23:
                                            var4 = var1;
                                            var3 = 'keypress';
                                            if (!(var3 == var4)) {
                                                _fun10904_ip = 182;
                                                continue _fun10904
                                            }
                                        case 37: // try_start_0
                                            var4 = var5.__sentry_instrumentation_handlers__;
                                            var3 = var4;
                                            if (var4) {
                                                _fun10904_ip = 51;
                                                continue _fun10904
                                            }
                                        case 49:
                                            var3 = {};
                                        case 51:
                                            var7 = var3;
                                            var5.__sentry_instrumentation_handlers__ = var7;
                                            var4 = var1;
                                            var8 = var7[var4];
                                            var3 = var8;
                                            if (var8) {
                                                _fun10904_ip = 85;
                                                continue _fun10904
                                            }
                                        case 73:
                                            var8 = {};
                                            var9 = 0;
                                            var8.refCount = var9;
                                            var3 = var8;
                                        case 85:
                                            var7[var4] = var3;
                                            var2 = var3;
                                            var3 = var3.handler;
                                            if (var3) {
                                                _fun10904_ip = 160;
                                                continue _fun10904
                                            }
                                        case 101:
                                            var4 = _closure1_slot6;
                                            var3 = _closure2_slot0;
                                            var8 = var4.bind(var6)(var3);
                                            var3 = var2;
                                            var3.handler = var8;
                                            var7 = _closure4_slot0;
                                            var6 = var7.call;
                                            var12 = var1;
                                            var10 = var0;
                                            var14 = var7;
                                            var13 = var5;
                                            var11 = var8;
                                            var3 = var14[var6](var13, var12, var11, var10, var9);
                                        case 160:
                                            var3 = var2;
                                            var2 = var3.refCount;
                                            var2 = var2 + 1;
                                            var3.refCount = var2;
                                        case 178: // try_end0
                                            _fun10904_ip = 182;
                                            continue _fun10904;
                                        case 180: // catch_target0
                                            CatchBlockStart(arg_register = 2);
                                        case 182:
                                            var4 = _closure4_slot0;
                                            var3 = var4.call;
                                            var12 = var1;
                                            var10 = var0;
                                            var11 = arg1;
                                            var14 = var4;
                                            var13 = var5;
                                            var0 = var14[var3](var13, var12, var11, var10, var9);
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var6 = var8.bind(var9)(var5, var7, var6);
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.fill;
                            var2 = 'removeEventListener';
                            var1 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var0 = function(arg0, arg1, arg2) { // Environment: var0
                                    _fun10906: for (var _fun10906_ip = 0;;) switch (_fun10906_ip) {
                                        case 0:
                                            var6 = arg0;
                                            var5 = this;
                                            var1 = var6;
                                            var0 = arg2;
                                            var7 = undefined;
                                            var2 = undefined;
                                            var4 = undefined;
                                            var3 = 'click';
                                            if (!(var3 !== var6)) {
                                                _fun10906_ip = 39;
                                                continue _fun10906
                                            }
                                        case 25:
                                            var6 = var1;
                                            var3 = 'keypress';
                                            if (!(var3 == var6)) {
                                                _fun10906_ip = 188;
                                                continue _fun10906
                                            }
                                        case 39: // try_start_0
                                            var6 = var5.__sentry_instrumentation_handlers__;
                                            var3 = var6;
                                            if (var6) {
                                                _fun10906_ip = 53;
                                                continue _fun10906
                                            }
                                        case 51:
                                            var3 = {};
                                        case 53:
                                            var6 = var3;
                                            var2 = var6;
                                            var3 = var1;
                                            var3 = var6[var3];
                                            var4 = var3;
                                            if (!var3) {
                                                _fun10906_ip = 184;
                                                continue _fun10906
                                            }
                                        case 72:
                                            var3 = var4;
                                            var6 = var3.refCount;
                                            var6 = var6 - 1;
                                            var3.refCount = var6;
                                            var6 = var3.refCount;
                                            var3 = 0;
                                            if (!(var6 <= var3)) {
                                                _fun10906_ip = 152;
                                                continue _fun10906
                                            }
                                        case 102:
                                            var11 = _closure4_slot0;
                                            var10 = var11.call;
                                            var6 = var1;
                                            var13 = var4.handler;
                                            var12 = var0;
                                            var16 = var11;
                                            var15 = var5;
                                            var14 = var6;
                                            var8 = var16[var10](var15, var14, var13, var12, var11);
                                            var4.handler = var7;
                                            var4 = var2;
                                            var4 = delete var4[var6];
                                        case 152:
                                            var4 = global;
                                            var6 = var4.Object;
                                            var4 = var6.keys;
                                            var2 = var4.bind(var6)(var2);
                                            var2 = var2.length;
                                            if (!(var3 === var2)) {
                                                _fun10906_ip = 184;
                                                continue _fun10906
                                            }
                                        case 179:
                                            var2 = delete var5.__sentry_instrumentation_handlers__;
                                        case 184: // try_end0
                                            _fun10906_ip = 188;
                                            continue _fun10906;
                                        case 186: // catch_target0
                                            CatchBlockStart(arg_register = 2);
                                        case 188:
                                            var4 = _closure4_slot0;
                                            var3 = var4.call;
                                            var14 = var1;
                                            var12 = var0;
                                            var13 = arg1;
                                            var16 = var4;
                                            var15 = var5;
                                            var0 = var16[var3](var15, var14, var13, var12, var11);
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var1 = var3.bind(var4)(var5, var2, var1);
                        case 166:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 206:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var3 = function arg0() {
        _fun10907: for (var _fun10907_ip = 0;;) switch (_fun10907_ip) {
            case 0:
                var5 = undefined;
                var3 = undefined;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arguments.length;
                var2 = 1;
                var1 = var1 > var2;
                if (!var1) {
                    _fun10907_ip = 34;
                    continue _fun10907
                }
            case 26:
                var4 = arguments[var2];
                var1 = var5 !== var4;
            case 34:
                if (!var1) {
                    _fun10907_ip = 41;
                    continue _fun10907
                }
            case 37:
                var1 = arguments[var2];
            case 41:
                var _closure2_slot1 = var1;
                var0 = function(arg0) { // Environment: var0
                    _fun10908: for (var _fun10908_ip = 0;;) switch (_fun10908_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun10908_ip = 456;
                                continue _fun10908
                            }
                        case 9:
                            var1 = var0._sentryCaptured;
                            if (var1) {
                                _fun10908_ip = 456;
                                continue _fun10908
                            }
                        case 21:
                            var1 = var0;
                        case 24: // try_start_0
                            var2 = var1.target;
                        case 30: // try_end0
                            _fun10908_ip = 36;
                            continue _fun10908;
                        case 32: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2 = null;
                        case 36:
                            var1 = var0.type;
                            var6 = 'keypress';
                            var1 = var6 === var1;
                            if (!var1) {
                                _fun10908_ip = 126;
                                continue _fun10908
                            }
                        case 52:
                            var3 = null;
                            var3 = var3 == var2;
                            if (var3) {
                                _fun10908_ip = 70;
                                continue _fun10908
                            }
                        case 61:
                            var4 = var2.tagName;
                            var3 = !var4;
                        case 70:
                            if (var3) {
                                _fun10908_ip = 123;
                                continue _fun10908
                            }
                        case 73:
                            var5 = var2.tagName;
                            var4 = 'INPUT';
                            var4 = var4 !== var5;
                            if (!var4) {
                                _fun10908_ip = 108;
                                continue _fun10908
                            }
                        case 92:
                            var7 = var2.tagName;
                            var5 = 'TEXTAREA';
                            var4 = var5 !== var7;
                        case 108:
                            if (!var4) {
                                _fun10908_ip = 120;
                                continue _fun10908
                            }
                        case 111:
                            var5 = var2.isContentEditable;
                            var4 = !var5;
                        case 120:
                            var3 = var4;
                        case 123:
                            var1 = var3;
                        case 126:
                            if (var1) {
                                _fun10908_ip = 456;
                                continue _fun10908
                            }
                        case 132:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var10 = 0;
                            var4 = var3[var10];
                            var3 = undefined;
                            var8 = var5.bind(var3)(var4);
                            var7 = var8.addNonEnumerableProperty;
                            var4 = '_sentryCaptured';
                            var5 = true;
                            var4 = var7.bind(var8)(var0, var4, var5);
                            var4 = var2;
                            if (!var4) {
                                _fun10908_ip = 190;
                                continue _fun10908
                            }
                        case 181:
                            var7 = var2._sentryId;
                            var4 = !var7;
                        case 190:
                            if (!var4) {
                                _fun10908_ip = 246;
                                continue _fun10908
                            }
                        case 193:
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var8 = var4[var10];
                            var9 = var7.bind(var3)(var8);
                            var8 = var9.addNonEnumerableProperty;
                            var4 = var4[var10];
                            var7 = var7.bind(var3)(var4);
                            var4 = var7.uuid4;
                            var7 = var4.bind(var7)();
                            var4 = '_sentryId';
                            var4 = var8.bind(var9)(var2, var4, var7);
                        case 246:
                            var4 = var0.type;
                            var7 = 'input';
                            if (!(var6 !== var4)) {
                                _fun10908_ip = 264;
                                continue _fun10908
                            }
                        case 259:
                            var7 = var0.type;
                        case 264:
                            var8 = var0;
                            var10 = var0.type;
                            var9 = _closure1_slot3;
                            var4 = false;
                            if (!(var10 === var9)) {
                                _fun10908_ip = 326;
                                continue _fun10908
                            }
                        case 282: // try_start_1
                            var9 = var8;
                            var9 = var9.target;
                            if (!var9) {
                                _fun10908_ip = 318;
                                continue _fun10908
                            }
                        case 294:
                            var8 = var8.target;
                            var9 = var8._sentryId;
                            var8 = _closure1_slot4;
                            if (!(var9 === var8)) {
                                _fun10908_ip = 318;
                                continue _fun10908
                            }
                        case 314: // try_end1
                            var4 = true;
                            _fun10908_ip = 326;
                            continue _fun10908;
                        case 318:
                            var4 = false;
                            _fun10908_ip = 326;
                            continue _fun10908;
                        case 322: // catch_target1
                            CatchBlockStart(arg_register = 6);
                            var4 = true;
                        case 326:
                            if (var4) {
                                _fun10908_ip = 385;
                                continue _fun10908
                            }
                        case 329:
                            var5 = _closure2_slot0;
                            var4 = {};
                            var4.event = var0;
                            var4.name = var7;
                            var6 = _closure2_slot1;
                            var4.global = var6;
                            var4 = var5.bind(var3)(var4);
                            var0 = var0.type;
                            var _closure1_slot3 = var0;
                            var0 = undefined;
                            if (!var2) {
                                _fun10908_ip = 381;
                                continue _fun10908
                            }
                        case 375:
                            var0 = var2._sentryId;
                        case 381:
                            var _closure1_slot4 = var0;
                        case 385:
                            var0 = global;
                            var2 = var0.clearTimeout;
                            var0 = _closure1_slot2;
                            var0 = var2.bind(var3)(var0);
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var0 = 1;
                            var0 = var4[var0];
                            var0 = var2.bind(var3)(var0);
                            var4 = var0.WINDOW;
                            var3 = var4.setTimeout;
                            var2 = function() { // Environment: var0
                                var0 = undefined;
                                _closure1_slot4 = var0;
                                _closure1_slot3 = var0;
                                return var0;
                            };
                            var0 = 1000;
                            var0 = var3.bind(var4)(var2, var0);
                            var _closure1_slot2 = var0;
                        case 456:
                            var0 = undefined;
                            return var0;
                    }
                };
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var1, var4, var3);
    var2 = function arg0() {
        var3 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 0;
        var4 = var5[var2];
        var0 = undefined;
        var8 = var3.bind(var0)(var4);
        var7 = var8.addHandler;
        var4 = 'dom';
        var6 = arg0;
        var6 = var7.bind(var8)(var4, var6);
        var2 = var5[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.maybeInstrument;
        var1 = _closure1_slot5;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var1.addClickKeypressInstrumentationHandler = var2;
    var1.instrumentDOM = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817, 1036]);