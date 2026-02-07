// utils/DragAndDropUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var4 = function arg0() {
        _fun81307: for (var _fun81307_ip = 0;;) switch (_fun81307_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.oldOrdering;
                var3 = var0.newOrdering;
                var12 = var0.idGetter;
                var11 = var0.existingPositionGetter;
                var1 = var0.ascending;
                var10 = undefined;
                if (!(var1 === var10)) {
                    _fun81307_ip = 41;
                    continue _fun81307
                }
            case 39:
                var1 = true;
            case 41:
                var9 = var3.length;
                var0 = var4.length;
                if (!(var0 === var9)) {
                    _fun81307_ip = 310;
                    continue _fun81307
                }
            case 58:
                var0 = var4.map;
                var2 = var0.bind(var4)(var12);
                var0 = var2.sort;
                var2 = var0.bind(var2)();
                var0 = var2.join;
                var5 = ':';
                var6 = var0.bind(var2)(var5);
                var0 = var3.map;
                var2 = var0.bind(var3)(var12);
                var0 = var2.sort;
                var2 = var0.bind(var2)();
                var0 = var2.join;
                var5 = var0.bind(var2)(var5);
                if (!(var6 === var5)) {
                    _fun81307_ip = 279;
                    continue _fun81307
                }
            case 129:
                var8 = {};
                var7 = 0;
                var2 = var7 < var9;
                var0 = 0;
                if (!var2) {
                    _fun81307_ip = 171;
                    continue _fun81307
                }
            case 142:
                var2 = var4[var0];
                var13 = var12.bind(var10)(var2);
                var2 = var4[var0];
                var2 = var11.bind(var10)(var2);
                var8[var13] = var2;
                var0 = var0 + 1;
                if (var0 < var9) {
                    _fun81307_ip = 142;
                    continue _fun81307
                }
            case 171:
                var0 = new Array(0);
                var13 = var7 < var9;
                var2 = 1;
                var7 = 0;
                if (!var13) {
                    _fun81307_ip = 264;
                    continue _fun81307
                }
            case 187:
                var13 = var3[var7];
                var16 = var12.bind(var10)(var13);
                var15 = var7;
                if (var1) {
                    _fun81307_ip = 210;
                    continue _fun81307
                }
            case 202:
                var13 = var9 - var2;
                var15 = var13 - var7;
            case 210:
                var13 = var8[var16];
                var13 = var13 === var15;
                if (!var13) {
                    _fun81307_ip = 234;
                    continue _fun81307
                }
            case 221:
                var14 = var3[var7];
                var14 = var11.bind(var10)(var14);
                var13 = var14 === var15;
            case 234:
                if (var13) {
                    _fun81307_ip = 257;
                    continue _fun81307
                }
            case 237:
                var14 = var0.push;
                var13 = {};
                var13.id = var16;
                var13.position = var15;
                var13 = var14.bind(var0)(var13);
            case 257:
                var7 = var7 + 1;
                if (var7 < var9) {
                    _fun81307_ip = 187;
                    continue _fun81307
                }
            case 264:
                if (var1) {
                    _fun81307_ip = 277;
                    continue _fun81307
                }
            case 267:
                var1 = var0.reverse;
                var1 = var1.bind(var0)();
            case 277:
                return var0;
            case 279:
                var2 = _closure1_slot2;
                var1 = var2.warn;
                var0 = 'Object IDs in the old ordering and the new ordering are not the same.';
                var0 = var1.bind(var2)(var0, var6, var5);
                var0 = new Array(0);
                return var0;
            case 310:
                var2 = _closure1_slot2;
                var1 = var2.warn;
                var0 = 'Arrays are not of the same length!';
                var0 = var1.bind(var2)(var0, var4, var3);
                var0 = new Array(0);
                return var0;
        }
    };
    var _closure1_slot3 = var4;
    var3 = function arg0, arg1, arg2() {
        var1 = arg0;
        var5 = arg1;
        var4 = var1[var5];
        var0 = new Array(0);
        var3 = 0;
        var8 = var0;
        var7 = var1;
        var6 = 0;
        var1 = arraySpread(var8, var7, var6);
        var2 = var0.splice;
        var1 = 1;
        var1 = var2.bind(var0)(var5, var1);
        var2 = var0.splice;
        var1 = arg2;
        var1 = var2.bind(var0)(var1, var3, var4);
        return var0;
    };
    var _closure1_slot4 = var3;
    var1 = function arg0() {
        _fun81309: for (var _fun81309_ip = 0;;) switch (_fun81309_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.objectArray;
                var9 = var0.fromPosition;
                var8 = var0.toPosition;
                var5 = var0.idGetter;
                var4 = var0.existingPositionGetter;
                var3 = var0.ascending;
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun81309_ip = 53;
                    continue _fun81309
                }
            case 51:
                var3 = true;
            case 53:
                var0 = global;
                var1 = var0.Array;
                var0 = var1.isArray;
                var0 = var0.bind(var1)(var6);
                var7 = var6;
                if (var0) {
                    _fun81309_ip = 110;
                    continue _fun81309
                }
            case 77:
                var1 = _closure1_slot0;
                var10 = _closure1_slot1;
                var0 = 1;
                var0 = var10[var0];
                var1 = var1.bind(var2)(var0);
                var0 = var1.values;
                var7 = var0.bind(var1)(var6);
            case 110:
                var1 = _closure1_slot3;
                var0 = {};
                var0.oldOrdering = var7;
                var6 = _closure1_slot4;
                var6 = var6.bind(var2)(var7, var9, var8);
                var0.newOrdering = var6;
                var0.idGetter = var5;
                var0.existingPositionGetter = var4;
                var0.ascending = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var9 = var8.bind(var0)(var5);
    var5 = var9.prototype;
    var8 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var13 = 'DragAndDropUtils';
    var14 = var8;
    var5 = new var14[var9](var13, var12);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot2 = var5;
    var5 = {};
    var5.moveItemFromTo = var3;
    var5.calculatePositionDeltas = var4;
    var5.getPositionUpdates = var1;
    var6 = 2;
    var7 = var7[var6];
    var6 = arg1;
    var8 = var6.bind(var0)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/DragAndDropUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.calculatePositionDeltas = var4;
    var2.moveItemFromTo = var3;
    var2.getPositionUpdates = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3, 22, 2]);