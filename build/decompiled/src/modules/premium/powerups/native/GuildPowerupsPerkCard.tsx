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
    var1 = function arg0() {
        _fun102438: for (var _fun102438_ip = 0;;) switch (_fun102438_ip) {
            case 0:
                var2 = arg0;
                var18 = var2.title;
                var17 = var2.description;
                var19 = var2.imageUrl;
                var14 = var2.isImageAnimated;
                var3 = undefined;
                if (!(var14 === var3)) {
                    _fun102438_ip = 33;
                    continue _fun102438
                }
            case 31:
                var14 = true;
            case 33:
                var7 = var2.riveComponent;
                var6 = var2.style;
                var4 = var2.onPress;
                var13 = var2.status;
                var1 = {
                    'title': 0,
                    'description': 0,
                    'imageUrl': 0,
                    'isImageAnimated': 0,
                    'riveComponent': 0,
                    'style': 0,
                    'onPress': 0,
                    'status': 0
                };
                var16 = null;
                var23 = var1;
                var22 = null;
                var0 = silentSetPrototypeOf(var23, var22);
                var23 = {};
                var22 = var2;
                var21 = var1;
                var12 = copyDataProperties(var23, var22, var21);
                var0 = _closure1_slot6;
                var10 = var0.bind(var3)();
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
                    _fun102438_ip = 168;
                    continue _fun102438
                }
            case 156:
                var15 = ['#0f101100', '#0f10111a'];
                _fun102438_ip = 178;
                continue _fun102438;
            case 168:
                var15 = ['#0f101100', '#0f101166'];
            case 178:
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 7;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var8 = var10.container;
                var5 = new Array(2);
                var5[0] = var8;
                var5[1] = var6;
                var0.containerStyle = var5;
                var5 = var10.card;
                var0.style = var5;
                var0.status = var13;
                var0.onPress = var4;
                var5 = _closure1_slot3;
                var4 = {};
                var6 = var10.imageContainer;
                var4.style = var6;
                if (!(var16 == var7)) {
                    _fun102438_ip = 320;
                    continue _fun102438
                }
            case 264:
                var11 = _closure1_slot4;
                var8 = _closure1_slot1;
                var20 = _closure1_slot2;
                var6 = 8;
                var6 = var20[var6];
                var8 = var8.bind(var3)(var6);
                var6 = {};
                var20 = var16 != var19;
                var16 = '';
                if (!var20) {
                    _fun102438_ip = 304;
                    continue _fun102438
                }
            case 301:
                var16 = var19;
            case 304:
                var6.imageUrl = var16;
                var6.isAnimated = var14;
                var7 = var11.bind(var3)(var8, var6);
            case 320:
                var6 = new Array(2);
                var6[0] = var7;
                var11 = _closure1_slot4;
                var8 = _closure1_slot1;
                var14 = _closure1_slot2;
                var7 = 9;
                var7 = var14[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var7.colors = var15;
                var15 = var10.gradient;
                var7.style = var15;
                var7 = var11.bind(var3)(var8, var7);
                var6[1] = var7;
                var4.children = var6;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var10.contentContainer;
                var5.style = var8;
                var8 = {};
                var10 = var10.headerContainer;
                var8.style = var10;
                var10 = _closure1_slot0;
                var15 = 10;
                var9 = var14[var15];
                var9 = var10.bind(var3)(var9);
                var16 = var9.Text;
                var9 = {};
                var19 = 'heading-md/bold';
                var9.variant = var19;
                var9.children = var18;
                var16 = var11.bind(var3)(var16, var9);
                var9 = new Array(2);
                var9[0] = var16;
                var15 = var14[var15];
                var15 = var10.bind(var3)(var15);
                var16 = var15.Text;
                var15 = {};
                var18 = 'text-sm/medium';
                var15.variant = var18;
                var15.children = var17;
                var15 = var11.bind(var3)(var16, var15);
                var9[1] = var15;
                var8.children = var9;
                var9 = var7.bind(var3)(var6, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = 11;
                var9 = var14[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.GuildPowerupsCardFooter;
                var9 = {};
                var23 = var9;
                var22 = var12;
                var12 = copyDataProperties(var23, var22);
                var12 = 'status';
                var9[var12] = var13;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3237, 3197, 13371, 13355, 4089, 3932, 13356, 2]);