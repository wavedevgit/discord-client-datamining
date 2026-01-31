// modules/user_profile/native/ApplicationIconAndName.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var6 = var3.Fragment;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        var2 = arg0;
        var0 = {};
        var1 = {};
        var1.width = var2;
        var1.height = var2;
        var2 = -1;
        var1.marginTop = var2;
        var2 = 4;
        var1.marginRight = var2;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var2 = var2.radii;
        var2 = var2.xs;
        var1.borderRadius = var2;
        var0.gameIcon = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/ApplicationIconAndName.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ApplicationIconAndName, environment: var1
        _fun90797: for (var _fun90797_ip = 0;;) switch (_fun90797_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.application;
                var10 = var0.textVariant;
                var13 = var0.iconSize;
                var8 = var0.useComma;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun90797_ip = 34;
                    continue _fun90797
                }
            case 32:
                var8 = false;
            case 34:
                var0 = _closure1_slot6;
                var4 = var0.bind(var3)(var13);
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var0 = {};
                var12 = _closure1_slot3;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 3;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var4 = var4.gameIcon;
                var6.style = var4;
                var4 = 'contain';
                var6.resizeMode = var4;
                var4 = {};
                var11 = var9.getIconURL;
                var14 = var11.bind(var9)(var13);
                var11 = null;
                var15 = var11 != var14;
                var11 = '';
                var13 = var11;
                if (!var15) {
                    _fun90797_ip = 132;
                    continue _fun90797
                }
            case 129:
                var13 = var14;
            case 132:
                var4.uri = var13;
                var6.source = var4;
                var4 = true;
                var6.disableColor = var4;
                var4 = var9.id;
                var6 = var12.bind(var3)(var7, var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot3;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 4;
                var5 = var12[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var5.variant = var10;
                var10 = var9.name;
                var9 = var11;
                if (!var8) {
                    _fun90797_ip = 219;
                    continue _fun90797
                }
            case 213:
                var9 = ', ';
            case 219:
                var8 = global;
                var8 = var8.HermesInternal;
                var8 = var8.concat;
                var8 = var8.bind(var11)(var10, var9);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [33, 1297, 671, 4045, 3900, 2]);