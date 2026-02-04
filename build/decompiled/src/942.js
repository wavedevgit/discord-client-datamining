// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function arg0() {
        _fun9781: for (var _fun9781_ip = 0;;) switch (_fun9781_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot3;
                var0 = var1.get;
                var0 = var0.bind(var1)(var4);
                if (var0) {
                    _fun9781_ip = 69;
                    continue _fun9781
                }
            case 23:
                var1 = global;
                var1 = var1.Map;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var7 = var3;
                var1 = new var7[var1](var6);
                var1 = var1 instanceof Object ? var1 : var3;
                var3 = _closure1_slot3;
                var2 = var3.set;
                var2 = var2.bind(var3)(var4, var1);
                var0 = var1;
            case 69:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var7 = var3.Object;
    var6 = var7.defineProperty;
    var4 = var3.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var2, var5, var4);
    var3 = var3.WeakMap;
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var12 = var4;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot3 = var3;
    var3 = function arg0() {
        _fun9782: for (var _fun9782_ip = 0;;) switch (_fun9782_ip) {
            case 0:
                var2 = _closure1_slot3;
                var1 = var2.get;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                if (!var1) {
                    _fun9782_ip = 156;
                    continue _fun9782
                }
            case 26:
                var7 = var1;
                var2 = var7[Symbol.iterator];
                var7 = var2().next;
                var6 = undefined;
                var5 = 2;
                var4 = 1;
                var3 = 4;
                var0 = 'cancelled';
            case 47:
                var10 = var7().value;
                var9 = var2;
                if (!(var9 !== var6)) {
                    _fun9782_ip = 146;
                    continue _fun9782
                }
            case 58: // try_start_0
                var9 = _closure1_slot2;
                var9 = var9.bind(var6)(var10, var5);
                var9 = var9[var4];
                var12 = var9.span;
                var11 = var12.setStatus;
                var10 = {};
                var14 = _closure1_slot0;
                var13 = _closure1_slot1;
                var13 = var13[var3];
                var13 = var14.bind(var6)(var13);
                var13 = var13.SPAN_STATUS_ERROR;
                var10.code = var13;
                var10.message = var0;
                var10 = var11.bind(var12)(var10);
                var10 = var9.span;
                var9 = var10.end;
                var9 = var9.bind(var10)();
            case 137: // try_end0
                _fun9782_ip = 47;
                continue _fun9782;
            case 139: // catch_target0
                CatchBlockStart(arg_register = 0);
                var2.return();
                throw var0;
            case 146:
                var0 = var1.clear;
                var0 = var0.bind(var1)();
            case 156:
                var0 = undefined;
                return var0;
        }
    };
    var2.cleanupPendingSpansForTransport = var3;
    var3 = function arg0, arg1, arg2() {
        _fun9783: for (var _fun9783_ip = 0;;) switch (_fun9783_ip) {
            case 0:
                var3 = arg1;
                var9 = arg2;
                var4 = _closure1_slot4;
                var0 = undefined;
                var2 = arg0;
                var2 = var4.bind(var0)(var2);
                var4 = var2.get;
                var5 = var4.bind(var2)(var3);
                if (!var5) {
                    _fun9783_ip = 369;
                    continue _fun9783
                }
            case 39:
                var4 = var5.span;
                var6 = var5.method;
                var5 = 'tools/call';
                if (!(var5 !== var6)) {
                    _fun9783_ip = 214;
                    continue _fun9783
                }
            case 62:
                var5 = 'prompts/get';
                if (!(var5 === var6)) {
                    _fun9783_ip = 350;
                    continue _fun9783
                }
            case 73:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 1;
                var5 = var7[var5];
                var8 = var6.bind(var0)(var5);
                var5 = var8.extractPromptResultAttributes;
                var8 = var5.bind(var8)(var9);
                var5 = 2;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.getClient;
                var10 = var5.bind(var6)();
                var5 = global;
                var6 = var5.Boolean;
                var5 = null;
                var7 = var5 == var10;
                var5 = undefined;
                if (var7) {
                    _fun9783_ip = 161;
                    continue _fun9783
                }
            case 145:
                var7 = var10.getOptions;
                var7 = var7.bind(var10)();
                var5 = var7.sendDefaultPii;
            case 161:
                var7 = var6.bind(var0)(var5);
                var6 = _closure1_slot0;
                var10 = _closure1_slot1;
                var5 = 3;
                var5 = var10[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.filterMcpPiiFromSpanData;
                var6 = var5.bind(var6)(var8, var7);
                var5 = var4.setAttributes;
                var5 = var5.bind(var4)(var6);
                _fun9783_ip = 350;
                continue _fun9783;
            case 214:
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 1;
                var5 = var8[var5];
                var7 = var6.bind(var0)(var5);
                var5 = var7.extractToolResultAttributes;
                var7 = var5.bind(var7)(var9);
                var5 = 2;
                var5 = var8[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.getClient;
                var9 = var5.bind(var6)();
                var5 = global;
                var6 = var5.Boolean;
                var5 = null;
                var8 = var5 == var9;
                var5 = undefined;
                if (var8) {
                    _fun9783_ip = 302;
                    continue _fun9783
                }
            case 286:
                var8 = var9.getOptions;
                var8 = var8.bind(var9)();
                var5 = var8.sendDefaultPii;
            case 302:
                var6 = var6.bind(var0)(var5);
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 3;
                var1 = var8[var1];
                var5 = var5.bind(var0)(var1);
                var1 = var5.filterMcpPiiFromSpanData;
                var5 = var1.bind(var5)(var7, var6);
                var1 = var4.setAttributes;
                var1 = var1.bind(var4)(var5);
            case 350:
                var1 = var4.end;
                var1 = var1.bind(var4)();
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
            case 369:
                return var0;
        }
    };
    var2.completeSpanWithResults = var3;
    var1 = function arg0, arg1, arg2, arg3() {
        var2 = _closure1_slot4;
        var0 = undefined;
        var1 = arg0;
        var4 = var2.bind(var0)(var1);
        var3 = var4.set;
        var2 = {};
        var1 = arg2;
        var2.span = var1;
        var1 = arg3;
        var2.method = var1;
        var1 = global;
        var5 = var1.Date;
        var1 = var5.now;
        var1 = var1.bind(var5)();
        var2.startTime = var1;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.storeSpanForRequest = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 943, 847, 941, 839]);