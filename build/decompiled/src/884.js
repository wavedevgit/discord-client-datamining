// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var3 = function arg0() {
        _fun9362: for (var _fun9362_ip = 0;;) switch (_fun9362_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = 'transaction';
                var0.type = var2;
                var2 = var1.timestamp;
                var0.timestamp = var2;
                var2 = var1.start_timestamp;
                var0.start_timestamp = var2;
                var2 = var1.description;
                var0.transaction = var2;
                var2 = {};
                var3 = {};
                var4 = var1.trace_id;
                var3.trace_id = var4;
                var4 = var1.span_id;
                var3.span_id = var4;
                var4 = var1.parent_span_id;
                var3.parent_span_id = var4;
                var4 = var1.op;
                var3.op = var4;
                var4 = var1.status;
                var3.status = var4;
                var4 = var1.origin;
                var3.origin = var4;
                var4 = global;
                var9 = var4.Object;
                var8 = var9.assign;
                var7 = var1.data;
                var6 = var1.profile_id;
                if (!var6) {
                    _fun9362_ip = 188;
                    continue _fun9362
                }
            case 138:
                var12 = _closure1_slot2;
                var5 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 1;
                var4 = var10[var4];
                var11 = undefined;
                var4 = var5.bind(var11)(var4);
                var10 = var4.SEMANTIC_ATTRIBUTE_PROFILE_ID;
                var5 = var1.profile_id;
                var4 = {};
                var6 = var12.bind(var11)(var4, var10, var5);
            case 188:
                var5 = var1.exclusive_time;
                if (!var5) {
                    _fun9362_ip = 247;
                    continue _fun9362
                }
            case 197:
                var13 = _closure1_slot2;
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var4 = 1;
                var4 = var11[var4];
                var12 = undefined;
                var4 = var10.bind(var12)(var4);
                var11 = var4.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME;
                var10 = var1.exclusive_time;
                var4 = {};
                var5 = var13.bind(var12)(var4, var11, var10);
            case 247:
                var17 = {};
                var18 = var9;
                var16 = var7;
                var15 = var6;
                var14 = var5;
                var4 = var18[var8](var17, var16, var15, var14, var13);
                var3.data = var4;
                var2.trace = var3;
                var0.contexts = var2;
                var1 = var1.measurements;
                var0.measurements = var1;
                return var0;
        }
    };
    var2.convertSpanJsonToTransactionEvent = var3;
    var1 = function arg0() {
        _fun9363: for (var _fun9363_ip = 0;;) switch (_fun9363_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.contexts;
                var2 = null;
                var4 = var2 == var3;
                var6 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun9363_ip = 28;
                    continue _fun9363
                }
            case 22:
                var0 = var3.trace;
            case 28:
                if (!(var2 == var0)) {
                    _fun9363_ip = 34;
                    continue _fun9363
                }
            case 32:
                var0 = {};
            case 34:
                var7 = var0.trace_id;
                var5 = var0.parent_span_id;
                var10 = var0.span_id;
                var8 = var0.status;
                var3 = var0.origin;
                var4 = var0.data;
                var9 = var0.op;
                var0 = {};
                var11 = var4;
                if (!(var2 == var11)) {
                    _fun9363_ip = 84;
                    continue _fun9363
                }
            case 82:
                var11 = {};
            case 84:
                var0.data = var11;
                var11 = var1.transaction;
                var0.description = var11;
                var0.op = var9;
                var0.parent_span_id = var5;
                var11 = var2 != var10;
                var5 = '';
                var9 = var5;
                if (!var11) {
                    _fun9363_ip = 124;
                    continue _fun9363
                }
            case 121:
                var9 = var10;
            case 124:
                var0.span_id = var9;
                var10 = var1.start_timestamp;
                var11 = var2 != var10;
                var9 = 0;
                if (!var11) {
                    _fun9363_ip = 147;
                    continue _fun9363
                }
            case 144:
                var9 = var10;
            case 147:
                var0.start_timestamp = var9;
                var0.status = var8;
                var8 = var1.timestamp;
                var0.timestamp = var8;
                var8 = var2 != var7;
                if (!var8) {
                    _fun9363_ip = 177;
                    continue _fun9363
                }
            case 174:
                var5 = var7;
            case 177:
                var0.trace_id = var5;
                var0.origin = var3;
                var5 = var2 == var4;
                var3 = undefined;
                if (var5) {
                    _fun9363_ip = 229;
                    continue _fun9363
                }
            case 196:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 1;
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var5 = var5.SEMANTIC_ATTRIBUTE_PROFILE_ID;
                var3 = var4[var5];
            case 229:
                var0.profile_id = var3;
                var3 = var2 == var4;
                var2 = undefined;
                if (var3) {
                    _fun9363_ip = 276;
                    continue _fun9363
                }
            case 243:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 1;
                var3 = var7[var3];
                var3 = var5.bind(var6)(var3);
                var3 = var3.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME;
                var2 = var4[var3];
            case 276:
                var0.exclusive_time = var2;
                var1 = var1.measurements;
                var0.measurements = var1;
                var1 = true;
                var0.is_segment = var1;
                return var0;
        }
    };
    var2.convertTransactionEventToSpanJson = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 838]);