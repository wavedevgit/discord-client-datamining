// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0() {
        var1 = arg0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 0;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var3 = var2.debug;
        var2 = var3.log;
        var12 = var1.op;
        var10 = var1.description;
        var1 = global;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var13 = 'Ignoring span ';
        var11 = ' - ';
        var9 = ' because it matches `ignoreSpans`.';
        var1 = var13[var6](var12, var11, var10, var9, var8);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var2 = function arg0, arg1() {
        _fun9026: for (var _fun9026_ip = 0;;) switch (_fun9026_ip) {
            case 0:
                var2 = arg1;
                var0 = undefined;
                var3 = undefined;
                var4 = undefined;
                var5 = undefined;
                var1 = var2.parent_span_id;
                var3 = var1;
                var4 = var2.span_id;
                if (!var1) {
                    _fun9026_ip = 83;
                    continue _fun9026
                }
            case 29:
                var1 = arg0;
                var2 = var1[Symbol.iterator];
                var1 = var2().next;
            case 35:
                var6 = var1().value;
                var7 = var2;
                if (!(var7 !== var0)) {
                    _fun9026_ip = 83;
                    continue _fun9026
                }
            case 46: // try_start_0
                var5 = var6;
                var7 = var6.parent_span_id;
                var6 = var4;
                if (!(var7 === var6)) {
                    _fun9026_ip = 74;
                    continue _fun9026
                }
            case 62:
                var7 = var5;
                var6 = var3;
                var7.parent_span_id = var6;
            case 74: // try_end0
                _fun9026_ip = 35;
                continue _fun9026;
            case 76: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 83:
                return var0;
        }
    };
    var1.reparentChildSpans = var2;
    var0 = function arg0, arg1() {
        _fun9027: for (var _fun9027_ip = 0;;) switch (_fun9027_ip) {
            case 0:
                var2 = arg1;
                var0 = arg0;
                var3 = undefined;
                var8 = undefined;
                var9 = undefined;
                var10 = undefined;
                var11 = undefined;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun9027_ip = 453;
                    continue _fun9027
                }
            case 25:
                var1 = var2.length;
                if (!var1) {
                    _fun9027_ip = 453;
                    continue _fun9027
                }
            case 36:
                var1 = var0;
                var1 = var1.description;
                if (!var1) {
                    _fun9027_ip = 453;
                    continue _fun9027
                }
            case 50:
                var7 = var2;
                var1 = var7[Symbol.iterator];
                var7 = var1().next;
                var6 = 1;
                var5 = global;
                var4 = 'string';
            case 68:
                var12 = var7().value;
                var13 = var1;
                if (!(var13 !== var3)) {
                    _fun9027_ip = 449;
                    continue _fun9027
                }
            case 82: // try_start_0
                var8 = var12;
                var11 = var12;
                var12 = typeof var12;
                if (!(var4 !== var12)) {
                    _fun9027_ip = 349;
                    continue _fun9027
                }
            case 98:
                var13 = var11;
                var12 = var5.RegExp;
                var12 = var13 instanceof var12;
                if (var12) {
                    _fun9027_ip = 349;
                    continue _fun9027
                }
            case 117:
                var12 = var8;
                var12 = var12.name;
                if (var12) {
                    _fun9027_ip = 142;
                    continue _fun9027
                }
            case 128:
                var12 = var8;
                var12 = var12.op;
                if (!var12) {
                    _fun9027_ip = 392;
                    continue _fun9027
                }
            case 142:
                var13 = var8;
                var13 = var13.name;
                var13 = !var13;
                var12 = var13;
                if (var13) {
                    _fun9027_ip = 204;
                    continue _fun9027
                }
            case 159:
                var14 = _closure1_slot0;
                var13 = _closure1_slot1;
                var13 = var13[var6];
                var16 = var14.bind(var3)(var13);
                var15 = var16.isMatchingPattern;
                var13 = var0;
                var14 = var13.description;
                var13 = var8;
                var13 = var13.name;
                var12 = var15.bind(var16)(var14, var13);
            case 204:
                var9 = var12;
                var13 = var8;
                var13 = var13.op;
                var13 = !var13;
                var12 = var13;
                if (var13) {
                    _fun9027_ip = 286;
                    continue _fun9027
                }
            case 224:
                var14 = var0;
                var14 = var14.op;
                var13 = var14;
                if (!var14) {
                    _fun9027_ip = 283;
                    continue _fun9027
                }
            case 238:
                var15 = _closure1_slot0;
                var14 = _closure1_slot1;
                var14 = var14[var6];
                var17 = var15.bind(var3)(var14);
                var16 = var17.isMatchingPattern;
                var14 = var0;
                var15 = var14.op;
                var14 = var8;
                var14 = var14.op;
                var13 = var16.bind(var17)(var15, var14);
            case 283:
                var12 = var13;
            case 286:
                var10 = var12;
                var12 = var9;
                if (!var12) {
                    _fun9027_ip = 392;
                    continue _fun9027
                }
            case 295:
                var12 = var10;
                if (!var12) {
                    _fun9027_ip = 392;
                    continue _fun9027
                }
            case 301:
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var12 = 2;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.DEBUG_BUILD;
                if (!var12) {
                    _fun9027_ip = 342;
                    continue _fun9027
                }
            case 330:
                var13 = _closure1_slot2;
                var12 = var0;
                var12 = var13.bind(var3)(var12);
            case 342: // try_end0
                var1.return();
                var12 = true;
                return var12;
            case 349: // try_start_1
                var13 = _closure1_slot0;
                var12 = _closure1_slot1;
                var12 = var12[var6];
                var15 = var13.bind(var3)(var12);
                var14 = var15.isMatchingPattern;
                var12 = var0;
                var13 = var12.description;
                var12 = var8;
                var12 = var14.bind(var15)(var13, var12);
                if (var12) {
                    _fun9027_ip = 397;
                    continue _fun9027
                }
            case 392: // try_end1
                _fun9027_ip = 68;
                continue _fun9027;
            case 397: // try_start_2
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 2;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.DEBUG_BUILD;
                if (!var4) {
                    _fun9027_ip = 435;
                    continue _fun9027
                }
            case 426:
                var2 = _closure1_slot2;
                var0 = var2.bind(var3)(var0);
            case 435: // try_end2
                var1.return();
                var0 = true;
                return var0;
            case 442: // catch_target0 // catch_target1 // catch_target2
                CatchBlockStart(arg_register = 0);
                var1.return();
                throw var0;
            case 449:
                var0 = false;
                return var0;
            case 453:
                var0 = false;
                return var0;
        }
    };
    var1.shouldIgnoreSpan = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [824, 831, 823]);