// modules/premium/native/gift_code_modal/GiftCodeRedeemError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var6 = var3.Image;
    var _closure1_slot3 = var6;
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'justifyContent': 'space-between'
    };
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.container = var8;
    var8 = {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center',
        'paddingTop': 28,
        'paddingBottom': 12,
        'paddingHorizontal': 32
    };
    var3.body = var8;
    var8 = {
        'marginTop': 32,
        'textAlign': 'center'
    };
    var3.header = var8;
    var8 = {
        'marginTop': 8,
        'textAlign': 'center'
    };
    var3.message = var8;
    var8 = {};
    var9 = 24;
    var8.paddingHorizontal = var9;
    var3.footer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/gift_code_modal/GiftCodeRedeemError.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GiftCodeRedeemError, environment: var1
        _fun92691: for (var _fun92691_ip = 0;;) switch (_fun92691_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.message;
                var0 = _closure1_slot8;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 5;
                var0 = var4[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.useTheme;
                var11 = var0.bind(var2)();
                var2 = _closure1_slot7;
                var0 = 6;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {};
                var4 = true;
                var0.bottom = var4;
                var4 = var9.container;
                var0.style = var4;
                var5 = _closure1_slot5;
                var4 = {};
                var6 = var9.body;
                var4.contentContainerStyle = var6;
                var6 = false;
                var4.alwaysBounceVertical = var6;
                var10 = _closure1_slot6;
                var7 = _closure1_slot3;
                var6 = {};
                var11 = var11.dark;
                var13 = _closure1_slot1;
                var15 = _closure1_slot2;
                if (var11) {
                    _fun92691_ip = 154;
                    continue _fun92691
                }
            case 140:
                var11 = 8;
                var11 = var15[var11];
                var11 = var13.bind(var3)(var11);
                _fun92691_ip = 166;
                continue _fun92691;
            case 154:
                var12 = 7;
                var12 = var15[var12];
                var11 = var13.bind(var3)(var12);
            case 166:
                var6.source = var11;
                var7 = var10.bind(var3)(var7, var6);
                var6 = new Array(3);
                var6[0] = var7;
                var7 = _closure1_slot6;
                var16 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 9;
                var11 = var12[var10];
                var11 = var16.bind(var3)(var11);
                var15 = var11.Text;
                var11 = {};
                var13 = 'heading-xl/bold';
                var11.variant = var13;
                var13 = var9.header;
                var11.style = var13;
                var13 = 10;
                var17 = var12[var13];
                var17 = var16.bind(var3)(var17);
                var20 = var17.intl;
                var19 = var20.formatToMarkdownString;
                var17 = var12[var13];
                var17 = var16.bind(var3)(var17);
                var17 = var17.t;
                var18 = var17.JUvC0s;
                var17 = {};
                var17 = var19.bind(var20)(var18, var17);
                var11.children = var17;
                var11 = var7.bind(var3)(var15, var11);
                var6[1] = var11;
                var10 = var12[var10];
                var10 = var16.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {};
                var15 = 'text-lg/medium';
                var10.variant = var15;
                var15 = var9.message;
                var10.style = var15;
                var10.children = var14;
                var10 = var7.bind(var3)(var11, var10);
                var6[2] = var10;
                var4.children = var6;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var9.footer;
                var5.style = var9;
                var11 = _closure1_slot1;
                var10 = 11;
                var8 = var12[var10];
                var9 = var11.bind(var3)(var8);
                var8 = {};
                var14 = var12[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var12[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.cpT0Cq;
                var13 = var14.bind(var15)(var13);
                var8.text = var13;
                var13 = var12[var10];
                var13 = var11.bind(var3)(var13);
                var13 = var13.Sizes;
                var13 = var13.MEDIUM;
                var8.size = var13;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.Colors;
                var10 = var10.BRAND;
                var8.color = var10;
                var10 = function() { // Original name: onPress, environment: var10
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.pop;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8.onPress = var10;
                var8 = var7.bind(var3)(var9, var8);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 1470, 4690, 12029, 12030, 4832, 1234, 4829, 4518, 2]);