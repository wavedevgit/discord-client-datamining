// modules/mfa/native/screens/MfaOptionScreen.tsx
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
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var6 = var3.jsxs;
    var _closure1_slot5 = var6;
    var3 = var3.Fragment;
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/mfa/native/screens/MfaOptionScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun86690: for (var _fun86690_ip = 0;;) switch (_fun86690_ip) {
            case 0:
                var0 = arg0;
                var21 = var0.headerText;
                var8 = var0.headerImage;
                var22 = var0.subtitle;
                var12 = var0.input;
                var11 = var0.submit;
                var16 = var0.screenProps;
                var1 = var0.mfaMethod;
                var19 = var0.error;
                var6 = var0.content;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 2;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.useScreenStyles;
                var14 = var0.bind(var2)();
                var0 = var16.mfaChallenge;
                var2 = var0.methods;
                var0 = 0;
                var2 = var2[var0];
                var13 = null;
                var5 = var13 == var2;
                var0 = undefined;
                if (var5) {
                    _fun86690_ip = 124;
                    continue _fun86690
                }
            case 119:
                var0 = var2.type;
            case 124:
                var10 = var0 === var1;
                var2 = _closure1_slot5;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 3;
                var0 = var5[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {
                    'bottom': true,
                    'top': true
                };
                var9 = var14.contentContainer;
                var0.style = var9;
                var9 = 4;
                var5 = var5[var9];
                var5 = var7.bind(var3)(var5);
                var7 = var5.Stack;
                var5 = {};
                var15 = var14.mfaContainerHeader;
                var5.style = var15;
                var15 = var13 != var8;
                if (!var15) {
                    _fun86690_ip = 222;
                    continue _fun86690
                }
            case 219:
                var15 = var8;
            case 222:
                var8 = new Array(5);
                var8[0] = var15;
                var18 = _closure1_slot4;
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var20 = 5;
                var15 = var15[var20];
                var15 = var17.bind(var3)(var15);
                var17 = var15.Text;
                var15 = {};
                var23 = 'heading-xl/extrabold';
                var15.variant = var23;
                var23 = var14.mfaContainerFooter;
                var15.style = var23;
                var15.children = var21;
                var15 = var18.bind(var3)(var17, var15);
                var8[1] = var15;
                var15 = var13 != var22;
                if (!var15) {
                    _fun86690_ip = 352;
                    continue _fun86690
                }
            case 302:
                var21 = _closure1_slot4;
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var17 = var17[var20];
                var17 = var18.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'heading-sm/normal',
                    'color': 'text-default'
                };
                var17.children = var22;
                var15 = var21.bind(var3)(var18, var17);
            case 352:
                var8[2] = var15;
                var13 = var13 != var19;
                if (!var13) {
                    _fun86690_ip = 413;
                    continue _fun86690
                }
            case 363:
                var18 = _closure1_slot4;
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var20];
                var15 = var17.bind(var3)(var15);
                var17 = var15.Text;
                var15 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-feedback-critical'
                };
                var15.children = var19;
                var13 = var18.bind(var3)(var17, var15);
            case 413:
                var8[3] = var13;
                var8[4] = var12;
                var5.children = var8;
                var7 = var2.bind(var3)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var5[1] = var6;
                var8 = _closure1_slot5;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var9];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Stack;
                var6 = {};
                var9 = new Array(2);
                var9[0] = var11;
                if (!var10) {
                    _fun86690_ip = 545;
                    continue _fun86690
                }
            case 483:
                var13 = _closure1_slot4;
                var12 = _closure1_slot3;
                var11 = {};
                var14 = var14.mfaContainerFooterMargin;
                var11.style = var14;
                var15 = _closure1_slot1;
                var17 = _closure1_slot2;
                var14 = 6;
                var14 = var17[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var14.props = var16;
                var14 = var13.bind(var3)(var15, var14);
                var11.children = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 545:
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var5[2] = var6;
                var0.children = var5;
                var5 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot5;
                var1 = _closure1_slot6;
                var0 = {};
                var7 = _closure1_slot4;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 7;
                var4 = var8[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var8 = false;
                var4.backgroundImageCover = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 11200, 4729, 4071, 3932, 11201, 7524, 2]);