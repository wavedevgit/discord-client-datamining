// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var1, var0, var2);
    var0 = function(arg0, arg1) { // Original name: SequencedTransition, environment: var0
        _fun33872: for (var _fun33872_ip = 0;;) switch (_fun33872_ip) {
            case 0:
                var0 = arg1;
                var14 = var0.translateX;
                var12 = var0.translateY;
                var7 = var0.scaleX;
                var8 = var0.scaleY;
                var3 = var0.reversed;
                var0 = {};
                var1 = arg0;
                var0.name = var1;
                var1 = {};
                var2 = {};
                var9 = {};
                var6 = global;
                var4 = var6.HermesInternal;
                var4 = var4.concat;
                var5 = '';
                var11 = 'px';
                var4 = var4.bind(var5)(var14, var11);
                var9.translateX = var4;
                var4 = var6.HermesInternal;
                var4 = var4.concat;
                var4 = var4.bind(var5)(var12, var11);
                var9.translateY = var4;
                var4 = var6.HermesInternal;
                var10 = var4.concat;
                var4 = ',';
                var4 = var10.bind(var5)(var7, var4, var8);
                var9.scale = var4;
                var4 = new Array(1);
                var4[0] = var9;
                var2.transform = var4;
                var1[0] = var2;
                var2 = {};
                var4 = {};
                var9 = '0px';
                var10 = var9;
                if (!var3) {
                    _fun33872_ip = 178;
                    continue _fun33872
                }
            case 161:
                var13 = var6.HermesInternal;
                var13 = var13.concat;
                var10 = var13.bind(var5)(var14, var11);
            case 178:
                var4.translateX = var10;
                if (var3) {
                    _fun33872_ip = 203;
                    continue _fun33872
                }
            case 186:
                var10 = var6.HermesInternal;
                var10 = var10.concat;
                var9 = var10.bind(var5)(var12, var11);
            case 203:
                var4.translateY = var9;
                var6 = var6.HermesInternal;
                var6 = var6.concat;
                if (var3) {
                    _fun33872_ip = 236;
                    continue _fun33872
                }
            case 222:
                var3 = ',1';
                var3 = var6.bind(var5)(var8, var3);
                _fun33872_ip = 247;
                continue _fun33872;
            case 236:
                var5 = '1,';
                var3 = var6.bind(var5)(var7);
            case 247:
                var4.scale = var3;
                var3 = new Array(1);
                var3[0] = var4;
                var2.transform = var3;
                var1[50] = var2;
                var2 = {};
                var3 = new Array(1);
                var4 = {
                    'translateX': '0px',
                    'translateY': '0px',
                    'scale': '1,1'
                };
                var3[0] = var4;
                var2.transform = var3;
                var1[100] = var2;
                var0.style = var1;
                var1 = 300;
                var0.duration = var1;
                return var0;
        }
    };
    var1.SequencedTransition = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);