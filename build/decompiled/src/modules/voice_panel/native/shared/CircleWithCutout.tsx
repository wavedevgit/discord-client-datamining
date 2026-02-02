// modules/voice_panel/native/shared/CircleWithCutout.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var6 = var4[var0];
    var5 = metroImportAll;
    var0 = undefined;
    var6 = var5.bind(var0)(var6);
    var5 = 1;
    var5 = var4[var5];
    var5 = var3.bind(var0)(var5);
    var7 = var5.PixelRatio;
    var5 = 2;
    var5 = var4[var5];
    var5 = var3.bind(var0)(var5);
    var8 = var5.jsx;
    var _closure1_slot3 = var8;
    var5 = var5.jsxs;
    var _closure1_slot4 = var5;
    var5 = var7.get;
    var5 = var5.bind(var7)();
    var _closure1_slot5 = var5;
    var5 = var6.memo;
    var1 = function arg0() {
        _fun111586: for (var _fun111586_ip = 0;;) switch (_fun111586_ip) {
            case 0:
                var4 = arg0;
                var8 = var4.fill;
                var0 = var4.circleRadius;
                var19 = var4.cutoutRadius;
                var9 = var4.enableCutout;
                var13 = var4.cutoutPositionInDegrees;
                var2 = var4.alignBadgeEdgeWithCircleEdge;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun111586_ip = 47;
                    continue _fun111586
                }
            case 45:
                var2 = false;
            case 47:
                var1 = var4.badgeRadius;
                var4 = var4.scaleToPixelDensity;
                if (!(var4 === var3)) {
                    _fun111586_ip = 65;
                    continue _fun111586
                }
            case 63:
                var4 = true;
            case 65:
                var7 = 1;
                var18 = var7;
                if (!var4) {
                    _fun111586_ip = 81;
                    continue _fun111586
                }
            case 74:
                var18 = _closure1_slot5;
            case 81:
                var10 = var0 * var18;
                var11 = null;
                var4 = var11 != var1;
                var0 = undefined;
                if (!var4) {
                    _fun111586_ip = 100;
                    continue _fun111586
                }
            case 96:
                var0 = var1 * var18;
            case 100:
                var1 = 2;
                var17 = var1 * var10;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 3;
                var6 = var14[var5];
                var15 = var12.bind(var3)(var6);
                var6 = var15.getCutoutCenterX;
                var6 = var6.bind(var15)(var10, var13);
                var5 = var14[var5];
                var12 = var12.bind(var3)(var5);
                var5 = var12.getCutoutCenterY;
                var5 = var5.bind(var12)(var10, var13);
                if (!var2) {
                    _fun111586_ip = 170;
                    continue _fun111586
                }
            case 166:
                var2 = var11 != var0;
            case 170:
                var21 = var6;
                var20 = var5;
                if (!var2) {
                    _fun111586_ip = 190;
                    continue _fun111586
                }
            case 179:
                var1 = var1 * var10;
                var21 = var1 - var0;
                var20 = var0;
            case 190:
                var2 = _closure1_slot4;
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var5 = 4;
                var0 = var11[var5];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.height = var17;
                var0.width = var17;
                var6 = {};
                var12 = {};
                var7 = var7 / var18;
                var12.scale = var7;
                var7 = new Array(1);
                var7[0] = var12;
                var6.transform = var7;
                var0.style = var6;
                var7 = _closure1_slot3;
                var6 = _closure1_slot0;
                var4 = var11[var5];
                var4 = var6.bind(var3)(var4);
                var12 = var4.Defs;
                var4 = {};
                var13 = var11[var5];
                var13 = var6.bind(var3)(var13);
                var14 = var13.Mask;
                var13 = {};
                var15 = 'mask';
                var13.id = var15;
                var15 = var11[var5];
                var15 = var6.bind(var3)(var15);
                var16 = var15.Rect;
                var15 = {};
                var15.width = var17;
                var15.height = var17;
                var17 = 'white';
                var15.fill = var17;
                var16 = var7.bind(var3)(var16, var15);
                var15 = new Array(2);
                var15[0] = var16;
                var16 = var11[var5];
                var16 = var6.bind(var3)(var16);
                var17 = var16.Circle;
                var16 = {};
                var16.cx = var21;
                var16.cy = var20;
                var18 = var19 * var18;
                var16.r = var18;
                var18 = 'black';
                var16.fill = var18;
                var16 = var7.bind(var3)(var17, var16);
                var15[1] = var16;
                var13.children = var15;
                var13 = var2.bind(var3)(var14, var13);
                var4.children = var13;
                var12 = var7.bind(var3)(var12, var4);
                var4 = new Array(2);
                var4[0] = var12;
                var5 = var11[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Circle;
                var5 = {};
                var5.cx = var10;
                var5.cy = var10;
                var5.r = var10;
                var5.fill = var8;
                var8 = undefined;
                if (!var9) {
                    _fun111586_ip = 480;
                    continue _fun111586
                }
            case 474:
                var8 = 'url(#mask)';
            case 480:
                var5.mask = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var5.bind(var6)(var1);
    var5 = 5;
    var5 = var4[var5];
    var7 = var3.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/shared/CircleWithCutout.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var1;
    var1 = 3;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.getBadgeLeft;
    var2.getBadgeLeft = var5;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.getBadgeTop;
    var2.getBadgeTop = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 7871, 5424, 2]);