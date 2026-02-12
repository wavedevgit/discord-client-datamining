// modules/forums/native/composer/ForumComposerHeader.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.StyleSheet;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot5 = var7;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = function(arg0) { // Environment: var1
        var0 = {};
        var1 = {
            'height': null,
            'flexDirection': 'row',
            'alignItems': 'center'
        };
        var2 = arg0;
        var1.height = var2;
        var0.headerBar = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center',
            'flex': 1
        };
        var0.headerBarContent = var1;
        var1 = {};
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 4;
        var7 = var5[var2];
        var3 = undefined;
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var1.marginHorizontal = var7;
        var0.headerBarText = var1;
        var1 = {};
        var6 = _closure1_slot3;
        var8 = var6.absoluteFillObject;
        var9 = var1;
        var7 = copyDataProperties(var9, var8);
        var7 = var6.hairlineWidth;
        var6 = 'height';
        var1[var6] = var7;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var7 = var6.BORDER_SUBTLE;
        var6 = 'backgroundColor';
        var1[var6] = var7;
        var6 = 'top';
        var1[var6] = var3;
        var0.headerBarSeparator = var1;
        var1 = {};
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.spacing;
        var2 = var2.PX_16;
        var1.paddingHorizontal = var2;
        var0.button = var1;
        return var0;
    };
    var3 = var6.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.XSmallIcon;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ForumIcon;
    var3 = {};
    var8 = 'sm';
    var3.size = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.BookCheckIcon;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot10 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/composer/ForumComposerHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73563: for (var _fun73563_ip = 0;;) switch (_fun73563_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.height;
                var18 = var0.title;
                var9 = var0.channel;
                var12 = var0.submitting;
                var2 = var0.onClose;
                var _closure2_slot0 = var2;
                var11 = var0.onGuidelinesPress;
                var0 = _closure1_slot7;
                var3 = undefined;
                var8 = var0.bind(var3)(var1);
                var1 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 8;
                var0 = var14[var0];
                var0 = var1.bind(var3)(var0);
                var19 = var0.bind(var3)(var9);
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var8.headerBar;
                var0.style = var4;
                var17 = _closure1_slot5;
                var15 = _closure1_slot0;
                var7 = 9;
                var4 = var14[var7];
                var4 = var15.bind(var3)(var4);
                var6 = var4.PressableOpacity;
                var4 = {};
                var13 = var8.button;
                var4.style = var13;
                var13 = 'button';
                var4.accessibilityRole = var13;
                var16 = 10;
                var20 = var14[var16];
                var20 = var15.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var14[var16];
                var20 = var15.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.cpT0Cq;
                var20 = var21.bind(var22)(var20);
                var4.accessibilityLabel = var20;
                var4.disabled = var12;
                var10 = function() {
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = false;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var4.onPress = var10;
                var10 = _closure1_slot8;
                var4.children = var10;
                var6 = var17.bind(var3)(var6, var4);
                var4 = new Array(4);
                var4[0] = var6;
                var6 = {};
                var10 = var8.headerBarContent;
                var6.style = var10;
                var12 = _closure1_slot9;
                var10 = new Array(2);
                var10[0] = var12;
                var12 = {};
                var20 = var8.headerBarText;
                var12.style = var20;
                var20 = 11;
                var14 = var14[var20];
                var14 = var15.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'lineClamp': 1,
                    'ellipsizeMode': 'tail',
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var21 = '';
                if (!(var21 === var18)) {
                    _fun73563_ip = 364;
                    continue _fun73563
                }
            case 310:
                var24 = _closure1_slot0;
                var21 = _closure1_slot2;
                var22 = var21[var16];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var16];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["7EjFCk"];
                var18 = var22.bind(var23)(var21);
            case 364:
                var14.children = var18;
                var15 = var17.bind(var3)(var15, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var18 = _closure1_slot5;
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var20];
                var15 = var17.bind(var3)(var15);
                var17 = var15.Text;
                var15 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var15.children = var19;
                var15 = var18.bind(var3)(var17, var15);
                var14[1] = var15;
                var12.children = var14;
                var12 = var2.bind(var3)(var1, var12);
                var10[1] = var12;
                var6.children = var10;
                var6 = var2.bind(var3)(var1, var6);
                var4[1] = var6;
                var6 = null;
                var12 = var6 == var9;
                var10 = undefined;
                if (var12) {
                    _fun73563_ip = 486;
                    continue _fun73563
                }
            case 475:
                var9 = var9.topic;
                var10 = var9.length;
            case 486:
                var9 = 0;
                var9 = var10 > var9;
                var6 = null;
                if (!var9) {
                    _fun73563_ip = 606;
                    continue _fun73563
                }
            case 497:
                var10 = _closure1_slot5;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = var12[var7];
                var7 = var15.bind(var3)(var7);
                var9 = var7.PressableOpacity;
                var7 = {};
                var7.accessibilityRole = var13;
                var13 = var12[var16];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.yR6HwZ;
                var12 = var13.bind(var14)(var12);
                var7.accessibilityLabel = var12;
                var12 = var8.button;
                var7.style = var12;
                var7.onPress = var11;
                var11 = _closure1_slot10;
                var7.children = var11;
                var6 = var10.bind(var3)(var9, var7);
            case 606:
                var4[2] = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var8.headerBarSeparator;
                var5.style = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5234, 4828, 4818, 4768, 4880, 1234, 3938, 2]);