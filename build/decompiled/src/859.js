// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var2 = function arg0() {
        _fun9060: for (var _fun9060_ip = 0;;) switch (_fun9060_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun9060_ip = 253;
                    continue _fun9060
                }
            case 39:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var5 = 1;
                var2 = var2[var5];
                var4 = var4.bind(var0)(var2);
                var2 = var4.spanToJSON;
                var2 = var2.bind(var4)(var3);
                var4 = var2.description;
                var10 = '< unknown name >';
                if (!(var0 !== var4)) {
                    _fun9060_ip = 88;
                    continue _fun9060
                }
            case 85:
                var10 = var4;
            case 88:
                var2 = var2.op;
                var9 = '< unknown op >';
                if (!(var0 !== var2)) {
                    _fun9060_ip = 106;
                    continue _fun9060
                }
            case 103:
                var9 = var2;
            case 106:
                var2 = var3.spanContext;
                var2 = var2.bind(var3)();
                var8 = var2.spanId;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var4 = var4.bind(var0)(var2);
                var2 = var4.getRootSpan;
                var2 = var2.bind(var4)(var3);
                var7 = '';
                if (!(var2 === var3)) {
                    _fun9060_ip = 164;
                    continue _fun9060
                }
            case 158:
                var7 = 'root ';
            case 164:
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var18 = '[Tracing] Finishing "';
                var16 = '" ';
                var14 = 'span "';
                var12 = '" with ID ';
                var17 = var9;
                var15 = var7;
                var13 = var10;
                var11 = var8;
                var3 = var18[var6](var17, var16, var15, var14, var13, var12, var11, var10);
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var4[var1];
                var1 = var2.bind(var0)(var1);
                var2 = var1.debug;
                var1 = var2.log;
                var1 = var1.bind(var2)(var3);
            case 253:
                return var0;
        }
    };
    var1.logSpanEnd = var2;
    var0 = function arg0() {
        _fun9061: for (var _fun9061_ip = 0;;) switch (_fun9061_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var4.bind(var0)(var1);
                var1 = var1.DEBUG_BUILD;
                if (!var1) {
                    _fun9061_ip = 597;
                    continue _fun9061
                }
            case 39:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var9 = 1;
                var1 = var1[var9];
                var4 = var4.bind(var0)(var1);
                var1 = var4.spanToJSON;
                var1 = var1.bind(var4)(var3);
                var4 = var1.description;
                var13 = '< unknown name >';
                if (!(var0 !== var4)) {
                    _fun9061_ip = 88;
                    continue _fun9061
                }
            case 85:
                var13 = var4;
            case 88:
                var4 = var1.op;
                var10 = '< unknown op >';
                if (!(var0 !== var4)) {
                    _fun9061_ip = 106;
                    continue _fun9061
                }
            case 103:
                var10 = var4;
            case 106:
                var12 = var1.parent_span_id;
                var1 = var3.spanContext;
                var1 = var1.bind(var3)();
                var11 = var1.spanId;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = var4[var9];
                var6 = var5.bind(var0)(var1);
                var1 = var6.spanIsSampled;
                var1 = var1.bind(var6)(var3);
                var4 = var4[var9];
                var5 = var5.bind(var0)(var4);
                var4 = var5.getRootSpan;
                var5 = var4.bind(var5)(var3);
                var3 = var5 === var3;
                var16 = 'unsampled';
                if (!var1) {
                    _fun9061_ip = 193;
                    continue _fun9061
                }
            case 189:
                var16 = 'sampled';
            case 193:
                var7 = '';
                var15 = var7;
                if (!var3) {
                    _fun9061_ip = 209;
                    continue _fun9061
                }
            case 203:
                var15 = 'root ';
            case 209:
                var1 = global;
                var4 = var1.HermesInternal;
                var14 = var4.concat;
                var21 = '[Tracing] Starting ';
                var19 = ' ';
                var17 = 'span';
                var20 = var16;
                var18 = var15;
                var6 = var21[var14](var20, var19, var18, var17, var16);
                var4 = var1.HermesInternal;
                var8 = var4.concat;
                var4 = 'op: ';
                var4 = var8.bind(var4)(var10);
                var8 = new Array(3);
                var8[0] = var4;
                var4 = var1.HermesInternal;
                var10 = var4.concat;
                var4 = 'name: ';
                var4 = var10.bind(var4)(var13);
                var8[1] = var4;
                var4 = var1.HermesInternal;
                var10 = var4.concat;
                var4 = 'ID: ';
                var4 = var10.bind(var4)(var11);
                var8[2] = var4;
                if (!var12) {
                    _fun9061_ip = 365;
                    continue _fun9061
                }
            case 333:
                var10 = var8.push;
                var4 = var1.HermesInternal;
                var11 = var4.concat;
                var4 = 'parent ID: ';
                var4 = var11.bind(var4)(var12);
                var4 = var10.bind(var8)(var4);
            case 365:
                if (var3) {
                    _fun9061_ip = 527;
                    continue _fun9061
                }
            case 371:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var9];
                var4 = var4.bind(var0)(var3);
                var3 = var4.spanToJSON;
                var3 = var3.bind(var4)(var5);
                var10 = var3.op;
                var9 = var3.description;
                var4 = var8.push;
                var3 = var5.spanContext;
                var3 = var3.bind(var5)();
                var11 = var3.spanId;
                var3 = var1.HermesInternal;
                var5 = var3.concat;
                var3 = 'root ID: ';
                var3 = var5.bind(var3)(var11);
                var3 = var4.bind(var8)(var3);
                if (!var10) {
                    _fun9061_ip = 492;
                    continue _fun9061
                }
            case 460:
                var4 = var8.push;
                var3 = var1.HermesInternal;
                var5 = var3.concat;
                var3 = 'root op: ';
                var3 = var5.bind(var3)(var10);
                var3 = var4.bind(var8)(var3);
            case 492:
                if (!var9) {
                    _fun9061_ip = 527;
                    continue _fun9061
                }
            case 495:
                var4 = var8.push;
                var3 = var1.HermesInternal;
                var5 = var3.concat;
                var3 = 'root description: ';
                var3 = var5.bind(var3)(var9);
                var3 = var4.bind(var8)(var3);
            case 527:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 2;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var3 = var2.debug;
                var2 = var3.log;
                var4 = var8.join;
                var5 = '\n  ';
                var4 = var4.bind(var8)(var5);
                var1 = var1.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var7)(var6, var5, var4);
                var1 = var2.bind(var3)(var1);
            case 597:
                return var0;
        }
    };
    var1.logSpanStart = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [823, 819, 824]);