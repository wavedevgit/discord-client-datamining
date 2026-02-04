// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var3 = function arg0() {
        _fun9855: for (var _fun9855_ip = 0;;) switch (_fun9855_ip) {
            case 0:
                var6 = arg0;
                var1 = var6.includes;
                var0 = 'messages';
                var1 = var1.bind(var6)(var0);
                if (var1) {
                    _fun9855_ip = 116;
                    continue _fun9855
                }
            case 20:
                var2 = var6.includes;
                var1 = 'completions';
                var2 = var2.bind(var6)(var1);
                if (var2) {
                    _fun9855_ip = 113;
                    continue _fun9855
                }
            case 39:
                var3 = var6.includes;
                var2 = 'models';
                var3 = var3.bind(var6)(var2);
                if (var3) {
                    _fun9855_ip = 110;
                    continue _fun9855
                }
            case 56:
                var4 = var6.includes;
                var3 = 'chat';
                var4 = var4.bind(var6)(var3);
                if (var4) {
                    _fun9855_ip = 107;
                    continue _fun9855
                }
            case 73:
                var5 = var6.split;
                var4 = '.';
                var5 = var5.bind(var6)(var4);
                var4 = var5.pop;
                var4 = var4.bind(var5)();
                if (var4) {
                    _fun9855_ip = 104;
                    continue _fun9855
                }
            case 100:
                var4 = 'unknown';
            case 104:
                var3 = var4;
            case 107:
                var2 = var3;
            case 110:
                var1 = var2;
            case 113:
                var0 = var1;
            case 116:
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var0 = 0;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var4 = var4.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var2, var5, var4);
    var4 = function arg0, arg1() {
        _fun9856: for (var _fun9856_ip = 0;;) switch (_fun9856_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = var4;
                if (!var5) {
                    _fun9856_ip = 40;
                    continue _fun9856
                }
            case 12:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '.';
                var0 = var3.bind(var2)(var5, var1, var4);
            case 40:
                return var0;
        }
    };
    var2.buildMethodPath = var4;
    var2.getFinalOperationName = var3;
    var3 = function arg0() {
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = arg0;
        var2 = var2.bind(var1)(var0);
        var0 = global;
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = 'gen_ai.';
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var2.getSpanOperation = var3;
    var3 = function arg0() {
        _fun9858: for (var _fun9858_ip = 0;;) switch (_fun9858_ip) {
            case 0:
                var2 = arg0;
                var1 = 'string';
                var0 = typeof var2;
                if (!(var1 !== var0)) {
                    _fun9858_ip = 109;
                    continue _fun9858
                }
            case 14:
                var0 = global;
                var3 = var0.Array;
                var1 = var3.isArray;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun9858_ip = 54;
                    continue _fun9858
                }
            case 35:
                var3 = var0.JSON;
                var1 = var3.stringify;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 54:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.truncateGenAiMessages;
                var3 = var1.bind(var3)(var2);
                var1 = var0.JSON;
                var0 = var1.stringify;
                var0 = var0.bind(var1)(var3);
                return var0;
            case 109:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.truncateGenAiStringInput;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.getTruncatedJsonString = var3;
    var1 = function arg0, arg1, arg2, arg3, arg4() {
        _fun9859: for (var _fun9859_ip = 0;;) switch (_fun9859_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var8 = arg2;
                var7 = arg3;
                var4 = arg4;
                var0 = undefined;
                var5 = var0 !== var1;
                if (!var5) {
                    _fun9859_ip = 77;
                    continue _fun9859
                }
            case 24:
                var6 = var3.setAttributes;
                var10 = _closure1_slot2;
                var9 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 1;
                var2 = var11[var2];
                var2 = var9.bind(var0)(var2);
                var9 = var2.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                var2 = {};
                var2 = var10.bind(var0)(var2, var9, var1);
                var2 = var6.bind(var3)(var2);
            case 77:
                var2 = var0 !== var8;
                if (!var2) {
                    _fun9859_ip = 137;
                    continue _fun9859
                }
            case 84:
                var9 = var3.setAttributes;
                var11 = _closure1_slot2;
                var10 = _closure1_slot0;
                var12 = _closure1_slot1;
                var6 = 1;
                var6 = var12[var6];
                var6 = var10.bind(var0)(var6);
                var10 = var6.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                var6 = {};
                var6 = var11.bind(var0)(var6, var10, var8);
                var6 = var9.bind(var3)(var6);
            case 137:
                if (var5) {
                    _fun9859_ip = 151;
                    continue _fun9859
                }
            case 140:
                if (var2) {
                    _fun9859_ip = 151;
                    continue _fun9859
                }
            case 143:
                if (!(var0 === var7)) {
                    _fun9859_ip = 151;
                    continue _fun9859
                }
            case 147:
                if (!(var0 !== var4)) {
                    _fun9859_ip = 266;
                    continue _fun9859
                }
            case 151:
                var5 = null;
                var9 = var5 != var1;
                var6 = 0;
                if (!var9) {
                    _fun9859_ip = 165;
                    continue _fun9859
                }
            case 162:
                var6 = var1;
            case 165:
                var9 = var5 != var8;
                var1 = 0;
                if (!var9) {
                    _fun9859_ip = 177;
                    continue _fun9859
                }
            case 174:
                var1 = var8;
            case 177:
                var6 = var6 + var1;
                var8 = var5 != var7;
                var1 = 0;
                if (!var8) {
                    _fun9859_ip = 193;
                    continue _fun9859
                }
            case 190:
                var1 = var7;
            case 193:
                var1 = var6 + var1;
                var5 = var5 != var4;
                var2 = 0;
                if (!var5) {
                    _fun9859_ip = 209;
                    continue _fun9859
                }
            case 206:
                var2 = var4;
            case 209:
                var6 = var1 + var2;
                var2 = var3.setAttributes;
                var5 = _closure1_slot2;
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 1;
                var1 = var7[var1];
                var1 = var4.bind(var0)(var1);
                var4 = var1.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                var1 = {};
                var1 = var5.bind(var0)(var1, var4, var6);
                var1 = var2.bind(var3)(var1);
            case 266:
                return var0;
        }
    };
    var2.setTokenUsageAttributes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 955, 958]);