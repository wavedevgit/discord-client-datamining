// modules/stickers/native/StickerPackHeader.tsx
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var10 = var7.PADDING_HORIZONTAL;
    var13 = var7.PADDING_VERTICAL;
    var7 = 3;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.jsx;
    var _closure1_slot4 = var8;
    var8 = var7.jsxs;
    var _closure1_slot5 = var8;
    var7 = var7.Fragment;
    var _closure1_slot6 = var7;
    var12 = var3 * var13;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.paddingTop = var13;
    var9.paddingHorizontal = var10;
    var10 = 36;
    var10 = var10 + var12;
    var9.height = var10;
    var10 = 'center';
    var9.justifyContent = var10;
    var10 = 'hidden';
    var9.overflow = var10;
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var12;
    var3.section = var9;
    var9 = {};
    var12 = -1;
    var9.flex = var12;
    var3.label = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var3.header = var9;
    var12 = '100%';
    var9 = {
        'aspectRatio': 3.824074074074074,
        'marginVertical': 4294967288,
        'width': '100%'
    };
    var3.bannerContainer = var9;
    var9 = {};
    var9.height = var12;
    var3.banner = var9;
    var9 = {
        'height': 20,
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.headline = var9;
    var9 = {
        'marginLeft': 8,
        'height': 16,
        'width': 16,
        'borderRadius': null,
        'backgroundColor': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9.backgroundColor = var12;
    var3.iconContainer = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_DEFAULT;
    var9.color = var10;
    var3.icon = var9;
    var9 = {
        'position': 'relative',
        'left': 1
    };
    var3.animatedIcon = var9;
    var9 = {
        'position': 'relative',
        'left': 4294967295
    };
    var3.premiumIcon = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun74570: for (var _fun74570_ip = 0;;) switch (_fun74570_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.stickerPack;
                var12 = var0.style;
                var10 = var0.onPress;
                var5 = var0.withBanner;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun74570_ip = 33;
                    continue _fun74570
                }
            case 31:
                var5 = false;
            case 33:
                var8 = var0.withDescription;
                if (!(var8 === var3)) {
                    _fun74570_ip = 45;
                    continue _fun74570
                }
            case 43:
                var8 = false;
            case 45:
                var0 = _closure1_slot7;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot6;
                var0 = {};
                var14 = _closure1_slot4;
                var9 = _closure1_slot3;
                var4 = {};
                var7 = var11.header;
                var4.style = var7;
                var15 = {};
                var7 = var11.headline;
                var15.style = var7;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var7 = 6;
                var16 = var19[var7];
                var16 = var18.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {
                    'style': null,
                    'lineClamp': 1,
                    'variant': 'text-md/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var20 = var11.label;
                var16.style = var20;
                var20 = var13.name;
                var16.children = var20;
                var17 = var14.bind(var3)(var17, var16);
                var16 = new Array(3);
                var16[0] = var17;
                var17 = 7;
                var17 = var19[var17];
                var18 = var18.bind(var3)(var17);
                var17 = var18.isStickerPackAnimated;
                var17 = var17.bind(var18)(var13);
                if (!var17) {
                    _fun74570_ip = 318;
                    continue _fun74570
                }
            case 195:
                var20 = _closure1_slot4;
                var19 = _closure1_slot3;
                var18 = {};
                var21 = var11.iconContainer;
                var18.style = var21;
                var24 = _closure1_slot1;
                var25 = _closure1_slot2;
                var23 = 8;
                var21 = var25[var23];
                var22 = var24.bind(var3)(var21);
                var21 = {};
                var26 = 9;
                var26 = var25[var26];
                var26 = var24.bind(var3)(var26);
                var21.source = var26;
                var26 = var11.animatedIcon;
                var21.style = var26;
                var23 = var25[var23];
                var23 = var24.bind(var3)(var23);
                var23 = var23.Sizes;
                var23 = var23.EXTRA_SMALL;
                var21.size = var23;
                var23 = var11.icon;
                var23 = var23.color;
                var21.color = var23;
                var21 = var20.bind(var3)(var22, var21);
                var18.children = var21;
                var17 = var20.bind(var3)(var19, var18);
            case 318:
                var16[1] = var17;
                var19 = _closure1_slot4;
                var18 = _closure1_slot3;
                var17 = {};
                var20 = var11.iconContainer;
                var17.style = var20;
                var23 = _closure1_slot1;
                var24 = _closure1_slot2;
                var22 = 8;
                var20 = var24[var22];
                var21 = var23.bind(var3)(var20);
                var20 = {};
                var25 = 10;
                var25 = var24[var25];
                var25 = var23.bind(var3)(var25);
                var20.source = var25;
                var25 = var11.premiumIcon;
                var20.style = var25;
                var22 = var24[var22];
                var22 = var23.bind(var3)(var22);
                var22 = var22.Sizes;
                var22 = var22.EXTRA_SMALL;
                var20.size = var22;
                var22 = var11.icon;
                var22 = var22.color;
                var20.color = var22;
                var20 = var19.bind(var3)(var21, var20);
                var17.children = var20;
                var17 = var19.bind(var3)(var18, var17);
                var16[2] = var17;
                var15.children = var16;
                var15 = var2.bind(var3)(var9, var15);
                var4.children = var15;
                var9 = var14.bind(var3)(var9, var4);
                var4 = new Array(3);
                var4[0] = var9;
                if (!var8) {
                    _fun74570_ip = 491;
                    continue _fun74570
                }
            case 480:
                var14 = var13.description;
                var9 = null;
                var8 = var9 != var14;
            case 491:
                if (!var8) {
                    _fun74570_ip = 545;
                    continue _fun74570
                }
            case 494:
                var15 = _closure1_slot4;
                var14 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var7];
                var9 = var14.bind(var3)(var9);
                var14 = var9.Text;
                var9 = {};
                var16 = 'text-sm/medium';
                var9.variant = var16;
                var16 = var13.description;
                var9.children = var16;
                var8 = var15.bind(var3)(var14, var9);
            case 545:
                var4[1] = var8;
                var9 = _closure1_slot4;
                var15 = _closure1_slot0;
                var18 = _closure1_slot2;
                var7 = var18[var7];
                var7 = var15.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'lineClamp': 1,
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var14 = 11;
                var16 = var18[var14];
                var16 = var15.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.format;
                var14 = var18[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.t;
                var15 = var14["0S3JpO"];
                var14 = {};
                var18 = var13.stickers;
                var18 = var18.length;
                var14.numStickers = var18;
                var14 = var16.bind(var17)(var15, var14);
                var7.children = var14;
                var7 = var9.bind(var3)(var8, var7);
                var4[2] = var7;
                var0.children = var4;
                var9 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot5;
                var1 = _closure1_slot6;
                var0 = {};
                if (!var5) {
                    _fun74570_ip = 754;
                    continue _fun74570
                }
            case 696:
                var8 = _closure1_slot4;
                var7 = _closure1_slot1;
                var14 = _closure1_slot2;
                var4 = 12;
                var4 = var14[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var4.stickerPack = var13;
                var13 = var11.bannerContainer;
                var4.containerStyle = var13;
                var13 = var11.banner;
                var4.style = var13;
                var5 = var8.bind(var3)(var7, var4);
            case 754:
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                if (!(var5 == var10)) {
                    _fun74570_ip = 811;
                    continue _fun74570
                }
            case 768:
                var8 = _closure1_slot4;
                var7 = _closure1_slot3;
                var5 = {};
                var14 = var11.section;
                var13 = new Array(2);
                var13[0] = var14;
                var13[1] = var12;
                var5.style = var13;
                var5.children = var9;
                var5 = var8.bind(var3)(var7, var5);
                _fun74570_ip = 886;
                continue _fun74570;
            case 811:
                var8 = _closure1_slot4;
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 13;
                var6 = var13[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.PressableOpacity;
                var6 = {};
                var13 = var11.section;
                var11 = new Array(2);
                var11[0] = var13;
                var11[1] = var12;
                var6.style = var11;
                var6.onPress = var10;
                var10 = 'header';
                var6.accessibilityRole = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 886:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stickers/native/StickerPackHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 9308, 33, 1297, 671, 3941, 3998, 4086, 9401, 6681, 1234, 9402, 4904, 2]);