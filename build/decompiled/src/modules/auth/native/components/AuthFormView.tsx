// modules/auth/native/components/AuthFormView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot2 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot4 = var8;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var9 = var10.createStyles;
    var6 = {};
    var3 = {};
    var12 = 4;
    var12 = var5[var12];
    var12 = var7.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var3.backgroundColor = var12;
    var3.flex = var11;
    var6.container = var3;
    var3 = {};
    var3.flex = var11;
    var6.flex = var3;
    var3 = {
        'paddingRight': 16,
        'paddingLeft': 16,
        'flex': 1
    };
    var6.content = var3;
    var3 = 8;
    var11 = {
        'marginTop': 8,
        'alignItems': 'center'
    };
    var6.subHeader = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var5[var6];
    var7 = var7.bind(var0)(var6);
    var6 = {};
    var6 = var8.bind(var0)(var7, var6);
    var _closure1_slot7 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/AuthFormView.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun63743: for (var _fun63743_ip = 0;;) switch (_fun63743_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.children;
                var16 = var0.headerText;
                var13 = var0.subHeader;
                var9 = var0.contentStyle;
                var11 = var0.backgroundImageSource;
                var7 = var0.backgroundImageCover;
                var0 = _closure1_slot6;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot2;
                var0 = {};
                var5 = var14.container;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = var14.flex;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot4;
                var5 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 6;
                var4 = var12[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.backgroundImageSource = var11;
                var4.backgroundImageCover = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = _closure1_slot7;
                var4[1] = var5;
                var6 = _closure1_slot3;
                var5 = {
                    'contentInset': null,
                    'automaticallyAdjustContentInsets': false,
                    'keyboardShouldPersistTaps': 'handled',
                    'alwaysBounceVertical': false
                };
                var7 = {};
                var11 = 0;
                var7.top = var11;
                var5.contentInset = var7;
                var7 = var14.flex;
                var5.style = var7;
                var11 = var14.content;
                var7 = new Array(3);
                var7[0] = var11;
                var11 = var14.flex;
                var7[1] = var11;
                var7[2] = var9;
                var5.contentContainerStyle = var7;
                var9 = null;
                var7 = var9 != var16;
                var11 = null;
                if (!var7) {
                    _fun63743_ip = 264;
                    continue _fun63743
                }
            case 228:
                var15 = _closure1_slot4;
                var12 = _closure1_slot0;
                var17 = _closure1_slot1;
                var7 = 7;
                var7 = var17[var7];
                var12 = var12.bind(var3)(var7);
                var7 = {};
                var7.children = var16;
                var11 = var15.bind(var3)(var12, var7);
            case 264:
                var7 = new Array(3);
                var7[0] = var11;
                var11 = var9 != var13;
                var9 = null;
                if (!var11) {
                    _fun63743_ip = 311;
                    continue _fun63743
                }
            case 281:
                var12 = _closure1_slot4;
                var11 = _closure1_slot2;
                var10 = {};
                var14 = var14.subHeader;
                var10.style = var14;
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 311:
                var7[1] = var9;
                var7[2] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 7859, 7860, 7863, 2]);