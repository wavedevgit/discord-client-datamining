// modules/emoji_picker/native/components/EmojiPickerListComponents.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var4);
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var13 = var3.LABEL_MARGIN;
    var12 = var3.NSFW_ROW_HEIGHT;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot4 = var4;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var6[var3];
    var8 = var5.bind(var0)(var3);
    var4 = var8.createStyles;
    var3 = {};
    var9 = {
        'justifyContent': 'center',
        'overflow': 'hidden'
    };
    var10 = 5;
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT;
    var9.backgroundColor = var14;
    var9.paddingTop = var13;
    var3.section = var9;
    var9 = {
        'flexDirection': 'row',
        'height': null,
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderRadius': null,
        'marginLeft': 12,
        'marginRight': 12
    };
    var9.height = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOD_NORMAL;
    var9.backgroundColor = var10;
    var3.nsfwContainer = var9;
    var9 = {
        'marginLeft': 4,
        'textAlign': 'center'
    };
    var3.nsfwText = var9;
    var3 = var4.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var4 = var7.memo;
    var3 = function() { // Environment: var1
        var0 = _closure1_slot6;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var8.nsfwContainer;
        var0.style = var4;
        var7 = _closure1_slot4;
        var10 = _closure1_slot1;
        var12 = _closure1_slot2;
        var9 = 6;
        var4 = var12[var9];
        var6 = var10.bind(var3)(var4);
        var4 = {};
        var11 = 7;
        var11 = var12[var11];
        var11 = var10.bind(var3)(var11);
        var4.source = var11;
        var9 = var12[var9];
        var9 = var10.bind(var3)(var9);
        var9 = var9.Sizes;
        var9 = var9.SMALL;
        var4.size = var9;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var11 = _closure1_slot0;
        var5 = 8;
        var5 = var12[var5];
        var5 = var11.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-sm/normal',
            'color': 'interactive-text-active'
        };
        var8 = var8.nsfwText;
        var5.style = var8;
        var8 = 9;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.SLzV5z;
        var8 = var9.bind(var10)(var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var4 = var7.memo;
    var1 = function(arg0) { // Environment: var1
        _fun73819: for (var _fun73819_ip = 0;;) switch (_fun73819_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.label;
                var5 = var0.isSectionNitroLocked;
                var10 = var0.useTier0UpsellContent;
                var0 = _closure1_slot6;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var4.section;
                var0.style = var4;
                if (!var5) {
                    _fun73819_ip = 98;
                    continue _fun73819
                }
            case 55:
                var8 = _closure1_slot4;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 10;
                var4 = var11[var4];
                var4 = var7.bind(var3)(var4);
                var7 = var4.PremiumUpsellGradientBackground;
                var4 = {};
                var4.useTier0UpsellContent = var10;
                var5 = var8.bind(var3)(var7, var4);
            case 98:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = '';
                var5 = null;
                if (!(var7 !== var9)) {
                    _fun73819_ip = 169;
                    continue _fun73819
                }
            case 116:
                var8 = _closure1_slot4;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 8;
                var6 = var10[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'lineClamp': 1,
                    'color': 'interactive-text-default',
                    'variant': 'heading-sm/semibold'
                };
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 169:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var4.bind(var7)(var1);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/native/components/EmojiPickerListComponents.tsx';
    var4 = var5.bind(var6)(var4);
    var2.NSFWRow = var3;
    var2.Section = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 9235, 33, 1297, 671, 4039, 6747, 3895, 1234, 8510, 2]);