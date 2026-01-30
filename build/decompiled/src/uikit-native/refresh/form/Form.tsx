// uikit-native/refresh/form/Form.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var7 = var1.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var10 = 1;
    var1 = var6[var10];
    var1 = var5.bind(var0)(var1);
    var1 = var1.ScrollView;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var4 = var8.createStyles;
    var1 = {};
    var9 = {};
    var9.flex = var10;
    var1.form = var9;
    var9 = {};
    var10 = 16;
    var9.paddingTop = var10;
    var1.redesign = var9;
    var1 = var4.bind(var8)(var1);
    var _closure1_slot6 = var1;
    var4 = var7.createContext;
    var1 = {};
    var8 = false;
    var1.isForm = var8;
    var1 = var4.bind(var7)(var1);
    var _closure1_slot7 = var1;
    var4 = var7.forwardRef;
    var3 = function(arg0, arg1) { // Environment: var3
        _fun44374: for (var _fun44374_ip = 0;;) switch (_fun44374_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.style;
                var6 = var0.children;
                var9 = var0.keyboardShouldPersistTaps;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun44374_ip = 31;
                    continue _fun44374
                }
            case 25:
                var9 = 'never';
            case 31:
                var8 = var0.alwaysBounceVertical;
                if (!(var8 === var3)) {
                    _fun44374_ip = 43;
                    continue _fun44374
                }
            case 41:
                var8 = true;
            case 43:
                var11 = var0.contentContainerStyle;
                var7 = var0.onScroll;
                var12 = var0.scrollsToTop;
                var16 = var0.onLayout;
                var0 = _closure1_slot6;
                var14 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 4;
                var0 = var13[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var10 = var0.insets;
                var2 = _closure1_slot3;
                var1 = var2.useContext;
                var5 = _closure1_slot0;
                var0 = 5;
                var0 = var13[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.RedesignCompatContext;
                var13 = var1.bind(var2)(var0);
                var2 = _closure1_slot5;
                var0 = _closure1_slot7;
                var1 = var0.Provider;
                var0 = {};
                var5 = {};
                var17 = true;
                var5.isForm = var17;
                var0.value = var5;
                var5 = _closure1_slot4;
                var4 = {};
                var17 = arg1;
                var4.ref = var17;
                var4.onLayout = var16;
                var4.scrollsToTop = var12;
                var16 = var14.form;
                var12 = new Array(3);
                var12[0] = var16;
                var12[1] = var15;
                if (!var13) {
                    _fun44374_ip = 224;
                    continue _fun44374
                }
            case 218:
                var13 = var14.redesign;
            case 224:
                var12[2] = var13;
                var4.style = var12;
                var12 = {};
                var13 = var10.bottom;
                var10 = 38;
                var10 = var10 + var13;
                var12.paddingBottom = var10;
                var10 = new Array(2);
                var10[0] = var12;
                var10[1] = var11;
                var4.contentContainerStyle = var10;
                var10 = {};
                var11 = 0;
                var10.top = var11;
                var4.contentInset = var10;
                var10 = false;
                var4.automaticallyAdjustContentInsets = var10;
                var4.keyboardShouldPersistTaps = var9;
                var4.alwaysBounceVertical = var8;
                var4.onScroll = var7;
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/refresh/form/Form.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FormContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 4855, 4859, 2]);