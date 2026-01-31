// modules/autocompleter/findNextSelectedResult.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var6 = var1.FindResultDirections;
    var _closure1_slot0 = var6;
    var1 = var1.AutocompleterResultTypes;
    var _closure1_slot1 = var1;
    var1 = 1;
    var1 = var5[var1];
    var5 = var4.bind(var0)(var1);
    var4 = var5.fileFinishedImporting;
    var1 = 'modules/autocompleter/findNextSelectedResult.tsx';
    var1 = var4.bind(var5)(var1);
    var1 = function(arg0, arg1, arg2, arg3) { // Original name: findNextSelectedResult, environment: var3
        _fun55041: for (var _fun55041_ip = 0;;) switch (_fun55041_ip) {
            case 0:
                var7 = arg0;
                var4 = arg1;
                var6 = arg2;
                var1 = arg3;
                var2 = var6.length;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun55041_ip = 171;
                    continue _fun55041
                }
            case 26:
                var3 = null;
                var5 = var4;
                if (!(var3 != var1)) {
                    _fun55041_ip = 44;
                    continue _fun55041
                }
            case 35:
                var5 = var1;
                if (!(var5 === var4)) {
                    _fun55041_ip = 44;
                    continue _fun55041
                }
            case 42:
                return var4;
            case 44:
                var1 = _closure1_slot0;
                var8 = var1.UP;
                var1 = 1;
                if (!(var7 === var8)) {
                    _fun55041_ip = 70;
                    continue _fun55041
                }
            case 64:
                var1 = -1;
            case 70:
                var10 = var4 + var1;
                var8 = var10 < var0;
                if (var8) {
                    _fun55041_ip = 135;
                    continue _fun55041
                }
            case 81:
                if (!(!(var10 >= var2))) {
                    _fun55041_ip = 135;
                    continue _fun55041
                }
            case 85:
                var1 = var6[var10];
                var9 = var1.type;
                var1 = _closure1_slot1;
                var4 = var1.HEADER;
                var1 = var10;
                if (!(var9 === var4)) {
                    _fun55041_ip = 133;
                    continue _fun55041
                }
            case 111:
                var9 = _closure1_slot2;
                var15 = undefined;
                var14 = var7;
                var13 = var10;
                var12 = var6;
                var11 = var5;
                var1 = var15[var9](var14, var13, var12, var11, var10);
            case 133:
                _fun55041_ip = 169;
                continue _fun55041;
            case 135:
                var4 = _closure1_slot2;
                var3 = -1;
                if (!var8) {
                    _fun55041_ip = 151;
                    continue _fun55041
                }
            case 148:
                var3 = var2;
            case 151:
                var15 = undefined;
                var14 = var7;
                var13 = var3;
                var12 = var6;
                var11 = var5;
                var1 = var15[var4](var14, var13, var12, var11, var10);
            case 169:
                return var1;
            case 171:
                return var0;
        }
    };
    var _closure1_slot2 = var1;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5561, 2]);