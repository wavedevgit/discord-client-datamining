// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function(arg0) { // Original name: getNativeImplementation, environment: var0
        _fun10916: for (var _fun10916_ip = 0;;) switch (_fun10916_ip) {
            case 0:
                var8 = arg0;
                var2 = var8;
                var7 = undefined;
                var4 = undefined;
                var6 = undefined;
                var5 = undefined;
                var10 = undefined;
                var0 = _closure1_slot2;
                var0 = var0[var8];
                if (var0) {
                    _fun10916_ip = 485;
                    continue _fun10916
                }
            case 33:
                var12 = _closure1_slot0;
                var11 = _closure1_slot1;
                var8 = 0;
                var9 = var11[var8];
                var9 = var12.bind(var7)(var9);
                var13 = var9.WINDOW;
                var9 = var2;
                var13 = var13[var9];
                var4 = var13;
                var9 = 1;
                var11 = var11[var9];
                var12 = var12.bind(var7)(var11);
                var11 = var12.isNativeFunction;
                var11 = var11.bind(var12)(var13);
                if (var11) {
                    _fun10916_ip = 439;
                    continue _fun10916
                }
            case 97:
                var12 = _closure1_slot0;
                var11 = _closure1_slot1;
                var11 = var11[var8];
                var11 = var12.bind(var7)(var11);
                var11 = var11.WINDOW;
                var11 = var11.document;
                var6 = var11;
                if (!var11) {
                    _fun10916_ip = 376;
                    continue _fun10916
                }
            case 135:
                var11 = var6;
                var11 = var11.createElement;
                var12 = 'function';
                var11 = typeof var11;
                if (!(var12 === var11)) {
                    _fun10916_ip = 376;
                    continue _fun10916
                }
            case 158: // try_start_0
                var12 = var6;
                var13 = var12.createElement;
                var11 = 'iframe';
                var11 = var13.bind(var12)(var11);
                var5 = var11;
                var13 = true;
                var11.hidden = var13;
                var13 = var12.head;
                var12 = var13.appendChild;
                var12 = var12.bind(var13)(var11);
                var13 = var11.contentWindow;
                var10 = var13;
                var12 = null;
                var12 = var12 != var13;
                var11 = var12;
                if (!var12) {
                    _fun10916_ip = 235;
                    continue _fun10916
                }
            case 225:
                var13 = var10;
                var12 = var2;
                var11 = var13[var12];
            case 235:
                if (!var11) {
                    _fun10916_ip = 248;
                    continue _fun10916
                }
            case 238:
                var11 = var10;
                var10 = var2;
                var4 = var11[var10];
            case 248:
                var10 = var6.head;
                var6 = var10.removeChild;
                var5 = var6.bind(var10)(var5);
            case 265: // try_end0
                _fun10916_ip = 376;
                continue _fun10916;
            case 267: // catch_target0
                CatchBlockStart(arg_register = 3);
                var6 = _closure1_slot0;
                var10 = _closure1_slot1;
                var5 = 2;
                var5 = var10[var5];
                var5 = var6.bind(var7)(var5);
                var5 = var5.DEBUG_BUILD;
                if (!var5) {
                    _fun10916_ip = 376;
                    continue _fun10916
                }
            case 298:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var9];
                var5 = var6.bind(var7)(var5);
                var9 = var5.debug;
                var6 = var9.warn;
                var13 = var2;
                var5 = global;
                var5 = var5.HermesInternal;
                var12 = var5.concat;
                var18 = 'Could not create sandbox iframe for ';
                var16 = ' check, bailing to window.';
                var14 = ': ';
                var17 = var13;
                var15 = var13;
                var5 = var18[var12](var17, var16, var15, var14, var13);
                var3 = var6.bind(var9)(var5, var3);
            case 376:
                var3 = var4;
                if (var3) {
                    _fun10916_ip = 387;
                    continue _fun10916
                }
            case 382:
                var3 = var4;
                _fun10916_ip = 437;
                continue _fun10916;
            case 387:
                var9 = _closure1_slot2;
                var6 = var2;
                var11 = var4;
                var10 = var11.bind;
                var12 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var8];
                var5 = var12.bind(var7)(var5);
                var5 = var5.WINDOW;
                var5 = var10.bind(var11)(var5);
                var9[var6] = var5;
                var3 = var5;
            case 437:
                return var3;
            case 439:
                var3 = _closure1_slot2;
                var5 = var4;
                var4 = var5.bind;
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var8];
                var1 = var6.bind(var7)(var1);
                var1 = var1.WINDOW;
                var1 = var4.bind(var5)(var1);
                var3[var2] = var1;
                return var1;
            case 485:
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var1, var4, var3);
    var3 = {};
    var _closure1_slot2 = var3;
    var3 = function(arg0) { // Original name: clearCachedImplementation, environment: var0
        var2 = _closure1_slot2;
        var0 = undefined;
        var1 = arg0;
        var2[var1] = var0;
        return var0;
    };
    var1.clearCachedImplementation = var3;
    var3 = function() { // Original name: fetch, environment: var0
        var3 = undefined;
        var0 = undefined;
        var2 = _closure1_slot3;
        var1 = 'fetch';
        var2 = var2.bind(var3)(var1);
        var1 = var2.apply;
        var0 = arguments;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1.fetch = var3;
    var1.getNativeImplementation = var2;
    var0 = function() { // Original name: setTimeout, environment: var0
        var3 = undefined;
        var0 = undefined;
        var2 = _closure1_slot3;
        var1 = 'setTimeout';
        var2 = var2.bind(var3)(var1);
        var1 = var2.apply;
        var0 = arguments;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1.setTimeout = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1036, 817, 1032]);