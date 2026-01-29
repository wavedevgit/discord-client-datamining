// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = function(arg0) { // Original name: parseLine, environment: var0
        _fun2637: for (var _fun2637_ip = 0;;) switch (_fun2637_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.match;
                var1 = _closure1_slot0;
                var8 = var3.bind(var2)(var1);
                if (var8) {
                    _fun2637_ip = 96;
                    continue _fun2637
                }
            case 24:
                var1 = var2.match;
                var0 = _closure1_slot1;
                var3 = var1.bind(var2)(var0);
                var0 = undefined;
                if (!var3) {
                    _fun2637_ip = 94;
                    continue _fun2637
                }
            case 44:
                var1 = {};
                var2 = 'SKIPPED';
                var1.type = var2;
                var2 = global;
                var5 = var2.Number;
                var4 = var5.parseInt;
                var2 = 1;
                var3 = var3[var2];
                var2 = 10;
                var2 = var4.bind(var5)(var3, var2);
                var1.count = var2;
                var0 = var1;
            case 94:
                return var0;
            case 96:
                var0 = {};
                var1 = 'FRAME';
                var0.type = var1;
                var1 = 1;
                var1 = var8[var1];
                var0.functionName = var1;
                var1 = 2;
                var2 = var8[var1];
                var1 = 'native';
                if (!(var1 !== var2)) {
                    _fun2637_ip = 444;
                    continue _fun2637
                }
            case 136:
                var1 = 3;
                var2 = var8[var1];
                var1 = 'address at ';
                if (!(var1 !== var2)) {
                    _fun2637_ip = 245;
                    continue _fun2637
                }
            case 153:
                var1 = {};
                var2 = 'SOURCE';
                var1.type = var2;
                var2 = 4;
                var2 = var8[var2];
                var1.sourceUrl = var2;
                var2 = global;
                var6 = var2.Number;
                var4 = var6.parseInt;
                var3 = 5;
                var3 = var8[var3];
                var5 = 10;
                var3 = var4.bind(var6)(var3, var5);
                var1.line1Based = var3;
                var4 = var2.Number;
                var3 = var4.parseInt;
                var2 = 6;
                var2 = var8[var2];
                var2 = var3.bind(var4)(var2, var5);
                var1.column1Based = var2;
                _fun2637_ip = 442;
                continue _fun2637;
            case 245:
                var4 = 4;
                var3 = var8[var4];
                var2 = 'InternalBytecode.js';
                if (!(var2 !== var3)) {
                    _fun2637_ip = 350;
                    continue _fun2637
                }
            case 262:
                var2 = {};
                var3 = 'BYTECODE';
                var2.type = var3;
                var3 = var8[var4];
                var2.sourceUrl = var3;
                var3 = global;
                var9 = var3.Number;
                var6 = var9.parseInt;
                var5 = 5;
                var5 = var8[var5];
                var7 = 10;
                var5 = var6.bind(var9)(var5, var7);
                var2.line1Based = var5;
                var6 = var3.Number;
                var5 = var6.parseInt;
                var3 = 6;
                var3 = var8[var3];
                var3 = var5.bind(var6)(var3, var7);
                var2.virtualOffset0Based = var3;
                _fun2637_ip = 439;
                continue _fun2637;
            case 350:
                var3 = {};
                var5 = 'INTERNAL_BYTECODE';
                var3.type = var5;
                var4 = var8[var4];
                var3.sourceUrl = var4;
                var4 = global;
                var9 = var4.Number;
                var6 = var9.parseInt;
                var5 = 5;
                var5 = var8[var5];
                var7 = 10;
                var5 = var6.bind(var9)(var5, var7);
                var3.line1Based = var5;
                var6 = var4.Number;
                var5 = var6.parseInt;
                var4 = 6;
                var4 = var8[var4];
                var4 = var5.bind(var6)(var4, var7);
                var3.virtualOffset0Based = var4;
                var2 = var3;
            case 439:
                var1 = var2;
            case 442:
                _fun2637_ip = 457;
                continue _fun2637;
            case 444:
                var2 = {};
                var3 = 'NATIVE';
                var2.type = var3;
                var1 = var2;
            case 457:
                var0.location = var1;
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = /^ {4}at (.+?)(?: \((native)\)?| \((address at )?(.*?):(\d+):(\d+)\))$/;
    var _closure1_slot0 = var2;
    var2 = /^ {4}... skipping (\d+) frames$/;
    var _closure1_slot1 = var2;
    var2 = /^ {4}at .*$/;
    var _closure1_slot2 = var2;
    var0 = function(arg0) { // Original name: parseHermesStack, environment: var0
        _fun2638: for (var _fun2638_ip = 0;;) switch (_fun2638_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.split;
                var0 = /\n/;
                var5 = var1.bind(var2)(var0);
                var8 = new Array(0);
                var0 = var5.length;
                var4 = 0;
                var0 = var4 < var0;
                var7 = -1;
                var10 = undefined;
                var3 = 0;
                var2 = undefined;
                var1 = var8;
                var6 = var7;
                if (!var0) {
                    _fun2638_ip = 172;
                    continue _fun2638
                }
            case 66:
                var15 = var5[var3];
                var12 = var8;
                var11 = var7;
                if (!var15) {
                    _fun2638_ip = 148;
                    continue _fun2638
                }
            case 79:
                var0 = _closure1_slot3;
                var0 = var0.bind(var10)(var15);
                if (var0) {
                    _fun2638_ip = 129;
                    continue _fun2638
                }
            case 91:
                var14 = _closure1_slot2;
                var13 = var14.test;
                var13 = var13.bind(var14)(var15);
                var12 = var8;
                var11 = var7;
                var2 = var0;
                if (var13) {
                    _fun2638_ip = 148;
                    continue _fun2638
                }
            case 117:
                var12 = new Array(0);
                var11 = var3;
                var2 = var0;
                _fun2638_ip = 148;
                continue _fun2638;
            case 129:
                var13 = var8.push;
                var13 = var13.bind(var8)(var0);
                var12 = var8;
                var11 = var7;
                var2 = var0;
            case 148:
                var3 = var3 + 1;
                var0 = var5.length;
                var8 = var12;
                var7 = var11;
                var1 = var8;
                var6 = var7;
                if (var3 < var0) {
                    _fun2638_ip = 66;
                    continue _fun2638
                }
            case 172:
                var0 = {};
                var3 = var5.slice;
                var2 = 1;
                var2 = var6 + var2;
                var4 = var3.bind(var5)(var4, var2);
                var3 = var4.join;
                var2 = '\n';
                var2 = var3.bind(var4)(var2);
                var0.message = var2;
                var0.entries = var1;
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);