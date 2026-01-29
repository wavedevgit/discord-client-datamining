// modules/premium/powerups/native/GuildPowerupsPerkCard.tsx
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
    var8 = {};
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginHorizontal = var11;
    var3.container = var8;
    var8 = {
        'padding': 0,
        'overflow': 'hidden'
    };
    var3.card = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.gap = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.padding = var11;
    var3.contentContainer = var8;
    var8 = {
        'width': '100%',
        'height': 160
    };
    var3.imageContainer = var8;
    var8 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'top': 0,
        'height': '100%'
    };
    var3.gradient = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_4;
    var8.gap = var9;
    var3.headerContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsPerkCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GuildPowerupsPerkCard, environment: var1
        _fun102882: for (var _fun102882_ip = 0;;) switch (_fun102882_ip) {
            case 0:
                var2 = arg0;
                var17 = var2.title;
                var16 = var2.description;
                var19 = var2.imageUrl;
                var18 = var2.isImageAnimated;
                var3 = undefined;
                if (!(var18 === var3)) {
                    _fun102882_ip = 33;
                    continue _fun102882
                }
            case 31:
                var18 = true;
            case 33:
                var6 = var2.style;
                var4 = var2.onPress;
                var12 = var2.status;
                var1 = {
                    'title': 0,
                    'description': 0,
                    'imageUrl': 0,
                    'isImageAnimated': 0,
                    'style': 0,
                    'onPress': 0,
                    'status': 0
                };
                var21 = null;
                var22 = var1;
                var0 = silentSetPrototypeOf(var22, var21);
                var22 = {};
                var21 = var2;
                var20 = var1;
                var11 = copyDataProperties(var22, var21, var20);
                var0 = _closure1_slot6;
                var9 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 5;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var0 = 6;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isThemeDark;
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun102882_ip = 160;
                    continue _fun102882
                }
            case 148:
                var15 = ['#0f101100', '#0f10111a'];
                _fun102882_ip = 170;
                continue _fun102882;
            case 160:
                var15 = ['#0f101100', '#0f101166'];
            case 170:
                var2 = _closure1_slot5;
                var14 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 7;
                var0 = var13[var0];
                var1 = var14.bind(var3)(var0);
                var0 = {};
                var7 = var9.container;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var0.containerStyle = var5;
                var5 = var9.card;
                var0.style = var5;
                var0.status = var12;
                var0.onPress = var4;
                var6 = _closure1_slot3;
                var4 = {};
                var5 = var9.imageContainer;
                var4.style = var5;
                var10 = _closure1_slot4;
                var5 = 8;
                var5 = var13[var5];
                var7 = var14.bind(var3)(var5);
                var5 = {};
                var5.imageUrl = var19;
                var5.isAnimated = var18;
                var7 = var10.bind(var3)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var7 = 9;
                var7 = var13[var7];
                var14 = var14.bind(var3)(var7);
                var7 = {};
                var7.colors = var15;
                var15 = var9.gradient;
                var7.style = var15;
                var7 = var10.bind(var3)(var14, var7);
                var5[1] = var7;
                var4.children = var5;
                var5 = var2.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var7 = var9.contentContainer;
                var5.style = var7;
                var7 = {};
                var9 = var9.headerContainer;
                var7.style = var9;
                var9 = _closure1_slot0;
                var14 = 10;
                var8 = var13[var14];
                var8 = var9.bind(var3)(var8);
                var15 = var8.Text;
                var8 = {};
                var18 = 'heading-md/bold';
                var8.variant = var18;
                var8.children = var17;
                var15 = var10.bind(var3)(var15, var8);
                var8 = new Array(2);
                var8[0] = var15;
                var14 = var13[var14];
                var14 = var9.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {};
                var17 = 'text-sm/medium';
                var14.variant = var17;
                var14.children = var16;
                var14 = var10.bind(var3)(var15, var14);
                var8[1] = var14;
                var7.children = var8;
                var8 = var2.bind(var3)(var6, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = 11;
                var8 = var13[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.GuildPowerupsCardFooter;
                var8 = {};
                var22 = var8;
                var21 = var11;
                var11 = copyDataProperties(var22, var21);
                var11 = 'status';
                var8[var11] = var12;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3205, 3165, 13382, 13366, 4051, 3895, 13367, 2]);