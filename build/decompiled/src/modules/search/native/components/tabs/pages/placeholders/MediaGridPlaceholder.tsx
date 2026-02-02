// modules/search/native/components/tabs/pages/placeholders/MediaGridPlaceholder.tsx
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
    var9 = 0;
    var6 = var5[var9];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MEDIA_NUM_COLUMNS;
    var _closure1_slot5 = var6;
    var10 = var3.SEARCH_LIST_SECTION_TOP_PADDING;
    var6 = var3.MEDIA_ITEM_GAP_WIDTH;
    var _closure1_slot6 = var6;
    var12 = var3.SEARCH_LIST_HORIZONTAL_PADDING;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'zIndex': 1,
        'position': 'absolute',
        'width': '100%'
    };
    var3.container = var8;
    var8 = {};
    var13 = 'relative';
    var8.position = var13;
    var8.paddingHorizontal = var12;
    var3.recentsContainer = var8;
    var8 = {};
    var12 = 'row';
    var8.flexDirection = var12;
    var3.row = var8;
    var8 = {
        'flex': 1,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'textTransform': 'none',
        'paddingTop': null,
        'paddingBottom': 8
    };
    var8.paddingTop = var10;
    var3.section = var8;
    var8 = {};
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var8.backgroundColor = var10;
    var3.sectionItem = var8;
    var8 = {};
    var8.opacity = var9;
    var3.sectionText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/tabs/pages/placeholders/MediaGridPlaceholder.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var0 = arg0;
        var7 = var0.size;
        var6 = var0.containerStyle;
        var2 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 6;
        var1 = var8[var1];
        var3 = undefined;
        var4 = var2.bind(var3)(var1);
        var2 = var4.usePlaceholderAnimatedStyle;
        var1 = true;
        var9 = var2.bind(var4)(var1);
        var2 = _closure1_slot7;
        var5 = _closure1_slot1;
        var0 = 7;
        var0 = var8[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var9;
        var0.style = var4;
        var4 = 'none';
        var0.pointerEvents = var4;
        var4 = 8;
        var4 = var8[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var4.height = var7;
        var4.width = var7;
        var4.style = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var1 = function arg0() {
        var0 = arg0;
        var2 = var0.visible;
        var1 = var0.size;
        var _closure2_slot0 = var1;
        var0 = var0.numRows;
        var _closure2_slot1 = var0;
        var1 = _closure1_slot9;
        var3 = undefined;
        var14 = var1.bind(var3)();
        var _closure2_slot2 = var14;
        var6 = _closure1_slot3;
        var4 = var6.useMemo;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var5
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.range;
            var1 = _closure2_slot1;
            var0 = _closure1_slot5;
            var1 = var1 * var0;
            var0 = 0;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0 = var4.bind(var6)(var0, var1);
        var _closure2_slot3 = var0;
        var4 = var6.useMemo;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var5
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.chunk;
            var1 = _closure2_slot3;
            var0 = _closure1_slot5;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var7 = var4.bind(var6)(var0, var1);
        var _closure2_slot4 = var7;
        var16 = _closure1_slot0;
        var17 = _closure1_slot2;
        var0 = 6;
        var0 = var17[var0];
        var1 = var16.bind(var3)(var0);
        var0 = var1.usePlaceholderAnimatedStyle;
        var6 = var0.bind(var1)(var2);
        var2 = _closure1_slot8;
        var1 = _closure1_slot1;
        var0 = 7;
        var0 = var17[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var9 = var14.container;
        var4 = new Array(3);
        var4[0] = var9;
        var9 = var14.recentsContainer;
        var4[1] = var9;
        var4[2] = var6;
        var0.style = var4;
        var4 = 'none';
        var0.pointerEvents = var4;
        var6 = _closure1_slot4;
        var4 = {};
        var9 = var14.section;
        var4.style = var9;
        var10 = _closure1_slot7;
        var8 = {};
        var9 = var14.sectionItem;
        var8.style = var9;
        var11 = 10;
        var9 = var17[var11];
        var9 = var16.bind(var3)(var9);
        var12 = var9.Text;
        var9 = {
            'style': null,
            'maxFontSizeMultiplier': 2,
            'accessibilityRole': 'header',
            'variant': 'text-sm/semibold',
            'color': 'interactive-text-default'
        };
        var13 = var14.sectionText;
        var9.style = var13;
        var13 = 11;
        var15 = var17[var13];
        var15 = var16.bind(var3)(var15);
        var19 = var15.intl;
        var18 = var19.string;
        var15 = var17[var13];
        var15 = var16.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15.LBYpDH;
        var15 = var18.bind(var19)(var15);
        var9.children = var15;
        var9 = var10.bind(var3)(var12, var9);
        var8.children = var9;
        var9 = var10.bind(var3)(var6, var8);
        var8 = new Array(2);
        var8[0] = var9;
        var9 = {};
        var12 = var14.sectionItem;
        var9.style = var12;
        var11 = var17[var11];
        var11 = var16.bind(var3)(var11);
        var12 = var11.Text;
        var11 = {
            'variant': 'text-sm/semibold',
            'color': 'text-brand'
        };
        var14 = var14.sectionText;
        var11.style = var14;
        var14 = var17[var13];
        var14 = var16.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var13 = var17[var13];
        var13 = var16.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.LFTAUp;
        var13 = var14.bind(var15)(var13);
        var11.children = var13;
        var11 = var10.bind(var3)(var12, var11);
        var9.children = var11;
        var9 = var10.bind(var3)(var6, var9);
        var8[1] = var9;
        var4.children = var8;
        var6 = var2.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var6 = var7.map;
        var5 = function(arg0, arg1) { // Environment: var5
            _fun105378: for (var _fun105378_ip = 0;;) switch (_fun105378_ip) {
                case 0:
                    var11 = arg0;
                    var4 = arg1;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot3;
                    var2 = var1.Fragment;
                    var1 = {};
                    var9 = _closure1_slot7;
                    var8 = _closure1_slot4;
                    var5 = {};
                    var10 = _closure2_slot2;
                    var10 = var10.row;
                    var5.style = var10;
                    var10 = var11.map;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var4 = arg1;
                        var3 = _closure1_slot7;
                        var1 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var0 = 8;
                        var0 = var7[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = {};
                        var5 = _closure2_slot0;
                        var0.height = var5;
                        var0.width = var5;
                        var6 = _closure1_slot0;
                        var5 = 12;
                        var5 = var7[var5];
                        var7 = var6.bind(var2)(var5);
                        var6 = var7.getMediaGridItemStyles;
                        var5 = {};
                        var11 = _closure3_slot0;
                        var9 = _closure1_slot5;
                        var11 = var11 * var9;
                        var11 = var11 + var4;
                        var5.itemIndex = var11;
                        var10 = _closure2_slot3;
                        var10 = var10.length;
                        var5.numItems = var10;
                        var5.numColumns = var9;
                        var8 = _closure1_slot6;
                        var5.spacing = var8;
                        var5 = var6.bind(var7)(var5);
                        var0.style = var5;
                        var0 = var3.bind(var2)(var1, var0, var4);
                        return var0;
                    };
                    var0 = var10.bind(var11)(var0);
                    var5.children = var0;
                    var0 = undefined;
                    var8 = var9.bind(var0)(var8, var5);
                    var5 = new Array(2);
                    var5[0] = var8;
                    var6 = _closure2_slot4;
                    var8 = var6.length;
                    var6 = 1;
                    var6 = var8 - var6;
                    var6 = var4 < var6;
                    if (!var6) {
                        _fun105378_ip = 156;
                        continue _fun105378
                    }
                case 118:
                    var9 = _closure1_slot7;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 13;
                    var7 = var10[var7];
                    var7 = var8.bind(var0)(var7);
                    var8 = var7.MediaVerticalSeparator;
                    var7 = {};
                    var6 = var9.bind(var0)(var8, var7);
                case 156:
                    var5[1] = var6;
                    var1.children = var5;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
            }
        };
        var5 = var6.bind(var7)(var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.RecentsMediaGridPlaceholder = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8863, 33, 1297, 671, 13686, 3681, 13688, 22, 3902, 1234, 11630, 13689, 2]);