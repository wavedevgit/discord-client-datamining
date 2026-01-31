// modules/voice_panel/native/utils/fitCardsInGrid.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function(arg0, arg1) { // Original name: isNewLayoutBetter, environment: var1
        _fun90936: for (var _fun90936_ip = 0;;) switch (_fun90936_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var2 = var0.unusedSpace;
                var3 = 0;
                if (!(var3 !== var2)) {
                    _fun90936_ip = 373;
                    continue _fun90936
                }
            case 21:
                var4 = var1.unusedSpace;
                var2 = var0.unusedSpace;
                if (!(var4 !== var2)) {
                    _fun90936_ip = 373;
                    continue _fun90936
                }
            case 40:
                var2 = var1.unusedSpace;
                if (!(var3 !== var2)) {
                    _fun90936_ip = 369;
                    continue _fun90936
                }
            case 53:
                var4 = var0.unusedSpace;
                var2 = inf;
                if (!(var4 !== var2)) {
                    _fun90936_ip = 369;
                    continue _fun90936
                }
            case 76:
                var2 = var0.unusedSpace;
                if (!(var2 > var3)) {
                    _fun90936_ip = 99;
                    continue _fun90936
                }
            case 86:
                var2 = var1.unusedSpace;
                if (!(!(var2 < var3))) {
                    _fun90936_ip = 365;
                    continue _fun90936
                }
            case 99:
                var2 = var1.unusedSpace;
                if (!(var2 > var3)) {
                    _fun90936_ip = 122;
                    continue _fun90936
                }
            case 109:
                var2 = var0.unusedSpace;
                if (!(!(var2 < var3))) {
                    _fun90936_ip = 361;
                    continue _fun90936
                }
            case 122:
                var3 = global;
                var5 = var3.Math;
                var4 = var5.abs;
                var2 = var0.unusedSpace;
                var4 = var4.bind(var5)(var2);
                var6 = var3.Math;
                var5 = var6.abs;
                var2 = var1.unusedSpace;
                var2 = var5.bind(var6)(var2);
                var6 = var3.Math;
                var5 = var6.max;
                var6 = var5.bind(var6)(var4, var2);
                var7 = var3.Math;
                var5 = var7.min;
                var5 = var5.bind(var7)(var4, var2);
                var6 = var6 - var5;
                var5 = 5000;
                if (!(!(var6 < var5))) {
                    _fun90936_ip = 224;
                    continue _fun90936
                }
            case 218:
                var2 = var2 < var4;
                return var2;
            case 224:
                var6 = var3.Math;
                var5 = var6.max;
                var4 = var1.rows;
                var2 = var1.columns;
                var2 = var5.bind(var6)(var4, var2);
                var6 = var3.Math;
                var5 = var6.min;
                var4 = var1.rows;
                var1 = var1.columns;
                var1 = var5.bind(var6)(var4, var1);
                var2 = var2 - var1;
                var6 = var3.Math;
                var5 = var6.max;
                var4 = var0.rows;
                var1 = var0.columns;
                var1 = var5.bind(var6)(var4, var1);
                var5 = var3.Math;
                var4 = var5.min;
                var3 = var0.rows;
                var0 = var0.columns;
                var0 = var4.bind(var5)(var3, var0);
                var1 = var1 - var0;
                var0 = var1 !== var2;
                if (!var0) {
                    _fun90936_ip = 359;
                    continue _fun90936
                }
            case 355:
                var0 = var2 < var1;
            case 359:
                return var0;
            case 361:
                var0 = true;
                return var0;
            case 365:
                var0 = false;
                return var0;
            case 369:
                var0 = true;
                return var0;
            case 373:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot0 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/utils/fitCardsInGrid.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: fitCardsInGrid, environment: var1
        _fun90937: for (var _fun90937_ip = 0;;) switch (_fun90937_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.cardCount;
                var14 = var0.gutterSize;
                var13 = var0.availableWidth;
                var12 = var0.availableHeight;
                var3 = {
                    'columns': 1,
                    'rows': 0,
                    'cardSize': 0,
                    'overscroll': 0,
                    'unusedSpace': inf
                };
                var11 = 1;
                var10 = 0;
                var16 = var11 <= var15;
                var9 = undefined;
                var8 = 'unusedSpace';
                var7 = 'overscroll';
                var6 = 'cardSize';
                var4 = global;
                var2 = var11;
                var0 = undefined;
                var1 = var3;
                if (!var16) {
                    _fun90937_ip = 415;
                    continue _fun90937
                }
            case 83:
                var16 = var2 - var11;
                var16 = var16 * var14;
                var16 = var13 - var16;
                var16 = var16 / var2;
                var19 = var15 % var2;
                var20 = var4.Math;
                var18 = var20.floor;
                var17 = var15 / var2;
                var18 = var18.bind(var20)(var17);
                var17 = 0;
                if (!(var19 > var17)) {
                    _fun90937_ip = 133;
                    continue _fun90937
                }
            case 130:
                var17 = var11;
            case 133:
                var17 = var18 + var17;
                var21 = {};
                var22 = var16 * var2;
                var20 = var13 * var12;
                var18 = var2 - var11;
                var19 = var18 * var14;
                var18 = var17 - var11;
                var23 = var18 * var14;
                var18 = var16 * var17;
                var18 = var18 + var23;
                var19 = var22 + var19;
                var19 = var19 * var18;
                var19 = var20 - var19;
                var21.unusedSpace = var19;
                var21.columns = var2;
                var18 = var12 - var18;
                var21.overscroll = var18;
                var21.rows = var17;
                var21.cardSize = var16;
                var16 = _closure1_slot0;
                var16 = var16.bind(var9)(var21, var3);
                var19 = var3;
                if (!var16) {
                    _fun90937_ip = 231;
                    continue _fun90937
                }
            case 228:
                var19 = var21;
            case 231:
                var17 = var21.overscroll;
                var16 = var19;
                if (!(var17 < var10)) {
                    _fun90937_ip = 399;
                    continue _fun90937
                }
            case 247:
                var17 = var21.rows;
                var17 = var17 - var11;
                var17 = var17 * var14;
                var18 = var12 - var17;
                var17 = var21.rows;
                var18 = var18 / var17;
                var17 = var21.rows;
                var20 = var18 * var17;
                var17 = var21.rows;
                var17 = var17 - var11;
                var17 = var17 * var14;
                var20 = var20 + var17;
                var17 = {};
                var25 = var17;
                var24 = var21;
                var22 = copyDataProperties(var25, var24);
                var22 = var21.columns;
                var23 = var18 * var22;
                var21 = var21.columns;
                var21 = var21 - var11;
                var21 = var21 * var14;
                var22 = var13 * var12;
                var21 = var23 + var21;
                var21 = var21 * var20;
                var21 = var22 - var21;
                var17[var8] = var21;
                var20 = var12 - var20;
                var17[var7] = var20;
                var17[var6] = var18;
                var18 = _closure1_slot0;
                var18 = var18.bind(var9)(var17, var19);
                var16 = var19;
                var0 = var17;
                if (!var18) {
                    _fun90937_ip = 399;
                    continue _fun90937
                }
            case 393:
                var16 = var17;
                var0 = var16;
            case 399:
                var2 = var2 + 1;
                var3 = var16;
                var1 = var3;
                if (var2 <= var15) {
                    _fun90937_ip = 83;
                    continue _fun90937
                }
            case 415:
                var0 = {};
                var2 = var1.columns;
                var0.columns = var2;
                var1 = var1.cardSize;
                var0.cardSize = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);