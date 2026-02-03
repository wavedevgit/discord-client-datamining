// modules/voice_messages/downsampleWaveform.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 1;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_messages/downsampleWaveform.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun90547: for (var _fun90547_ip = 0;;) switch (_fun90547_ip) {
            case 0:
                var0 = arg0;
                var8 = arg1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 0;
                var1 = var1[var7];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var1 = var0.length;
                var2 = var1 >= var8;
                var1 = 'Waveform smaller than samples';
                var1 = var3.bind(var4)(var2, var1);
                var1 = var0.length;
                if (!(var1 !== var8)) {
                    _fun90547_ip = 230;
                    continue _fun90547
                }
            case 63:
                var1 = var0.length;
                var6 = var1 / var8;
                var1 = new Array(0);
                var2 = var1.length;
                var2 = var2 < var8;
                var5 = global;
                var4 = 1;
                var3 = 0;
                if (!var2) {
                    _fun90547_ip = 228;
                    continue _fun90547
                }
            case 98:
                var10 = var5.Math;
                var9 = var10.round;
                var2 = var1.length;
                var2 = var2 + var4;
                var2 = var2 * var6;
                var9 = var9.bind(var10)(var2);
                var10 = var3 < var9;
                var11 = 0;
                var2 = 0;
                if (!var10) {
                    _fun90547_ip = 203;
                    continue _fun90547
                }
            case 138:
                var10 = var0.length;
                var10 = var3 < var10;
                var13 = 0;
                var12 = 0;
                var11 = 0;
                var2 = 0;
                if (!var10) {
                    _fun90547_ip = 203;
                    continue _fun90547
                }
            case 158:
                var10 = var0[var3];
                var15 = var13 + var10;
                var14 = var12 + 1;
                var3 = var3 + 1;
                var11 = var15;
                var2 = var14;
                if (!(var3 < var9)) {
                    _fun90547_ip = 203;
                    continue _fun90547
                }
            case 182:
                var10 = var0.length;
                var13 = var15;
                var12 = var14;
                var11 = var13;
                var2 = var12;
                if (var3 < var10) {
                    _fun90547_ip = 158;
                    continue _fun90547
                }
            case 203:
                var10 = var1.length;
                var2 = var11 / var2;
                var1[var10] = var2;
                var2 = var1.length;
                var3 = var9;
                if (var2 < var8) {
                    _fun90547_ip = 98;
                    continue _fun90547
                }
            case 228:
                return var1;
            case 230:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [44, 2]);