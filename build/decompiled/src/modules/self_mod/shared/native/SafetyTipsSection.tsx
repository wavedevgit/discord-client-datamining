// modules/self_mod/shared/native/SafetyTipsSection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var9 = 'center';
    var8 = {
        'alignSelf': 'center',
        'justifySelf': 'center'
    };
    var3.image = var8;
    var8 = {};
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var8.borderRadius = var12;
    var12 = 'hidden';
    var8.overflow = var12;
    var3.tips = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var8.marginBottom = var10;
    var3.tipRow = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.text = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_mod/shared/native/SafetyTipsSection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun72494: for (var _fun72494_ip = 0;;) switch (_fun72494_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.description;
                var10 = var0.safetyTips;
                var _closure2_slot0 = var10;
                var7 = var0.showHeader;
                var0 = _closure1_slot6;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 5;
                var0 = var12[var6];
                var0 = var11.bind(var3)(var0);
                var1 = var0.Stack;
                var0 = {};
                var4 = 16;
                var0.spacing = var4;
                var14 = _closure1_slot4;
                var13 = _closure1_slot3;
                var4 = {};
                var16 = var9.image;
                var4.style = var16;
                var16 = 6;
                var16 = var12[var16];
                var16 = var11.bind(var3)(var16);
                var17 = var16.SafetyBookletSpotIllustration;
                var16 = {};
                var16 = var14.bind(var3)(var17, var16);
                var4.children = var16;
                var13 = var14.bind(var3)(var13, var4);
                var4 = new Array(3);
                var4[0] = var13;
                var6 = var12[var6];
                var6 = var11.bind(var3)(var6);
                var11 = var6.Stack;
                var6 = {
                    'spacing': 8,
                    'align': 'center',
                    'justify': 'center'
                };
                var20 = 8;
                if (!var7) {
                    _fun72494_ip = 283;
                    continue _fun72494
                }
            case 177:
                var14 = _closure1_slot4;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 7;
                var12 = var16[var12];
                var12 = var19.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {};
                var17 = var9.text;
                var12.style = var17;
                var17 = 'heading-xl/semibold';
                var12.variant = var17;
                var17 = var16[var20];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var20];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.eAbVfS;
                var16 = var17.bind(var18)(var16);
                var12.children = var16;
                var7 = var14.bind(var3)(var13, var12);
            case 283:
                var12 = new Array(2);
                var12[0] = var7;
                var7 = _closure1_slot4;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = 7;
                var13 = var16[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var16 = var9.text;
                var13.style = var16;
                var13.children = var15;
                var13 = var7.bind(var3)(var14, var13);
                var12[1] = var13;
                var6.children = var12;
                var6 = var2.bind(var3)(var11, var6);
                var4[1] = var6;
                var6 = _closure1_slot3;
                var5 = {};
                var9 = var9.tips;
                var5.style = var9;
                var9 = var10.map;
                var8 = function(arg0, arg1) { // Environment: var8
                    var4 = arg1;
                    var3 = _closure1_slot4;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var6 = 1;
                    var5 = var4 + var6;
                    var0.index = var5;
                    var5 = arg0;
                    var0.tip = var5;
                    var5 = _closure2_slot0;
                    var5 = var5.length;
                    var5 = var5 - var6;
                    var5 = var4 === var5;
                    var0.end = var5;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
                };
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4071, 5957, 3932, 1234, 6426, 2]);