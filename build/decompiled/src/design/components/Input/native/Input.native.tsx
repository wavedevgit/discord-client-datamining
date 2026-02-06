// design/components/Input/native/Input.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'row';
    var8.flexDirection = var9;
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.gap = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var8.marginTop = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var8.marginBottom = var11;
    var3.inputRow = var8;
    var8 = {
        'marginBottom': null,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var8.marginBottom = var11;
    var3.labelWrapper = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var8.marginBottom = var11;
    var3.label = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var8.marginTop = var11;
    var3.description = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_4;
    var8.marginTop = var9;
    var9 = 'auto';
    var8.width = var9;
    var3.error = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Input/native/Input.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun48098: for (var _fun48098_ip = 0;;) switch (_fun48098_ip) {
            case 0:
                var0 = arg0;
                var1 = _closure1_slot5;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var19 = var0.label;
                var16 = var0.labelTrailing;
                var20 = var0.labelId;
                var13 = var0.description;
                var9 = var0.errorMessage;
                var12 = var0.children;
                var4 = var0.containerStyle;
                var18 = var0.required;
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var0.style = var4;
                var5 = null;
                var4 = var5 != var19;
                var7 = null;
                if (!var4) {
                    _fun48098_ip = 397;
                    continue _fun48098
                }
            case 89:
                if (!(var5 == var16)) {
                    _fun48098_ip = 294;
                    continue _fun48098
                }
            case 96:
                var11 = _closure1_slot4;
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var17 = 5;
                var4 = var4[var17];
                var4 = var8.bind(var3)(var4);
                var8 = var4.Text;
                var4 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-subtle'
                };
                var14 = var10.label;
                var4.style = var14;
                var4.nativeID = var20;
                var14 = new Array(2);
                var14[0] = var19;
                var15 = null;
                if (!var18) {
                    _fun48098_ip = 278;
                    continue _fun48098
                }
            case 166:
                var21 = _closure1_slot4;
                var25 = _closure1_slot0;
                var26 = _closure1_slot1;
                var17 = var26[var17];
                var17 = var25.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'text-sm/bold',
                    'color': 'text-feedback-critical'
                };
                var22 = 6;
                var23 = var26[var22];
                var23 = var25.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var26[var22];
                var22 = var25.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.EkokLy;
                var22 = var23.bind(var24)(var22);
                var17['aria-label'] = var22;
                var22 = [' ', '*'];
                var17.children = var22;
                var15 = var21.bind(var3)(var18, var17);
            case 278:
                var14[1] = var15;
                var4.children = var14;
                var4 = var11.bind(var3)(var8, var4);
                _fun48098_ip = 394;
                continue _fun48098;
            case 294:
                var14 = _closure1_slot4;
                var11 = _closure1_slot2;
                var8 = {};
                var15 = var10.labelWrapper;
                var8.style = var15;
                var18 = _closure1_slot3;
                var17 = _closure1_slot0;
                var21 = _closure1_slot1;
                var15 = 5;
                var15 = var21[var15];
                var15 = var17.bind(var3)(var15);
                var17 = var15.Text;
                var15 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-subtle'
                };
                var15.nativeID = var20;
                var15.children = var19;
                var17 = var18.bind(var3)(var17, var15);
                var15 = new Array(2);
                var15[0] = var17;
                var15[1] = var16;
                var8.children = var15;
                var4 = var14.bind(var3)(var11, var8);
            case 394:
                var7 = var4;
            case 397:
                var4 = new Array(4);
                var4[0] = var7;
                var11 = _closure1_slot3;
                var8 = _closure1_slot2;
                var7 = {};
                var14 = var10.inputRow;
                var7.style = var14;
                var7.children = var12;
                var7 = var11.bind(var3)(var8, var7);
                var4[1] = var7;
                var8 = var5 != var13;
                var7 = null;
                if (!var8) {
                    _fun48098_ip = 510;
                    continue _fun48098
                }
            case 448:
                var12 = _closure1_slot3;
                var11 = _closure1_slot0;
                var14 = _closure1_slot1;
                var8 = 5;
                var8 = var14[var8];
                var8 = var11.bind(var3)(var8);
                var11 = var8.Text;
                var8 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var14 = var10.description;
                var8.style = var14;
                var8.children = var13;
                var7 = var12.bind(var3)(var11, var8);
            case 510:
                var4[2] = var7;
                var7 = var5 != var9;
                var5 = null;
                if (!var7) {
                    _fun48098_ip = 574;
                    continue _fun48098
                }
            case 523:
                var8 = _closure1_slot3;
                var7 = _closure1_slot0;
                var11 = _closure1_slot1;
                var6 = 7;
                var6 = var11[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.ErrorText;
                var6 = {};
                var10 = var10.error;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 574:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.Input = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3943, 1234, 5395, 2]);