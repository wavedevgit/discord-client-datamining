// modules/stickers/native/StickerPackInformationPopout.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var6 = var3.View;
    var _closure1_slot2 = var6;
    var3 = var3.FlatList;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.Fonts;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'width': '90%',
        'marginHorizontal': '5%',
        'padding': 16
    };
    var11 = 5;
    var9 = var5[var11];
    var9 = var15.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var14 = 16;
    var9 = var5[var11];
    var9 = var15.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xs;
    var8.borderRadius = var9;
    var9 = var5[var11];
    var9 = var15.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BLACK;
    var8.shadowColor = var9;
    var9 = {
        'width': 2,
        'height': 2
    };
    var8.shadowOffset = var9;
    var9 = 0.25;
    var8.shadowOpacity = var9;
    var8.shadowRadius = var11;
    var3.informationContainer = var8;
    var10 = 'row';
    var8 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'marginBottom': 8
    };
    var3.headerContainer = var8;
    var8 = {};
    var9 = 20;
    var8.lineHeight = var9;
    var3.informationHeader = var8;
    var8 = {};
    var13 = 6;
    var13 = var5[var13];
    var13 = var15.bind(var0)(var13);
    var12 = var12.DISPLAY_EXTRABOLD;
    var11 = var5[var11];
    var11 = var15.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.BRAND_500;
    var17 = var13.bind(var0)(var12, var11, var14);
    var18 = var8;
    var11 = copyDataProperties(var18, var17);
    var3.closeText = var8;
    var8 = {};
    var8.flexDirection = var10;
    var3.informationContentContainer = var8;
    var8 = {};
    var8.lineHeight = var9;
    var3.informationContent = var8;
    var8 = {
        'flex': 1,
        'marginLeft': 5
    };
    var3.informationContentDescription = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = function(arg0) { // Original name: generateListData, environment: var1
        _fun74240: for (var _fun74240_ip = 0;;) switch (_fun74240_ip) {
            case 0:
                var0 = new Array(0);
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 7;
                var1 = var4[var1];
                var7 = undefined;
                var4 = var2.bind(var7)(var1);
                var2 = var4.isStickerPackAnimated;
                var1 = arg0;
                var1 = var2.bind(var4)(var1);
                if (!var1) {
                    _fun74240_ip = 127;
                    continue _fun74240
                }
            case 46:
                var2 = var0.push;
                var1 = {};
                var4 = 'animated';
                var1.key = var4;
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 8;
                var4 = var8[var3];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.W11rMa;
                var3 = var4.bind(var5)(var3);
                var1.description = var3;
                var1 = var2.bind(var0)(var1);
            case 127:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stickers/native/StickerPackInformationPopout.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: _default, environment: var1
        var0 = arg0;
        var20 = var0.stickerPack;
        var12 = var0.onClose;
        var6 = var0.style;
        var0 = _closure1_slot6;
        var3 = undefined;
        var15 = var0.bind(var3)();
        var _closure2_slot0 = var15;
        var0 = _closure1_slot7;
        var9 = var0.bind(var3)(var20);
        var2 = _closure1_slot5;
        var1 = _closure1_slot2;
        var0 = {};
        var7 = var15.informationContainer;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var6;
        var0.style = var4;
        var4 = {};
        var6 = var15.headerContainer;
        var4.style = var6;
        var7 = _closure1_slot4;
        var17 = _closure1_slot0;
        var18 = _closure1_slot1;
        var6 = 9;
        var6 = var18[var6];
        var6 = var17.bind(var3)(var6);
        var10 = var6.Text;
        var6 = {
            'style': null,
            'variant': 'text-md/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var11 = var15.informationHeader;
        var6.style = var11;
        var14 = 8;
        var11 = var18[var14];
        var11 = var17.bind(var3)(var11);
        var19 = var11.intl;
        var16 = var19.format;
        var11 = var18[var14];
        var11 = var17.bind(var3)(var11);
        var11 = var11.t;
        var13 = var11.XDm6yN;
        var11 = {};
        var20 = var20.name;
        var11.stickerPackName = var20;
        var11 = var16.bind(var19)(var13, var11);
        var6.children = var11;
        var10 = var7.bind(var3)(var10, var6);
        var6 = new Array(2);
        var6[0] = var10;
        var10 = 10;
        var10 = var18[var10];
        var10 = var17.bind(var3)(var10);
        var11 = var10.PressableOpacity;
        var10 = {};
        var10.onPress = var12;
        var12 = 'button';
        var10.accessibilityRole = var12;
        var12 = var18[var14];
        var12 = var17.bind(var3)(var12);
        var16 = var12.intl;
        var13 = var16.string;
        var12 = var18[var14];
        var12 = var17.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.cpT0Cq;
        var12 = var13.bind(var16)(var12);
        var10.accessibilityLabel = var12;
        var12 = 11;
        var12 = var18[var12];
        var12 = var17.bind(var3)(var12);
        var13 = var12.LegacyText;
        var12 = {};
        var15 = var15.closeText;
        var12.style = var15;
        var15 = var18[var14];
        var15 = var17.bind(var3)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var14 = var18[var14];
        var14 = var17.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.cpT0Cq;
        var14 = var15.bind(var16)(var14);
        var12.children = var14;
        var12 = var7.bind(var3)(var13, var12);
        var10.children = var12;
        var10 = var7.bind(var3)(var11, var10);
        var6[1] = var10;
        var4.children = var6;
        var6 = var2.bind(var3)(var1, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var6 = _closure1_slot3;
        var5 = {};
        var5.data = var9;
        var8 = function(arg0) { // Original name: renderItem, environment: var8
            var0 = arg0;
            var8 = var0.item;
            var3 = _closure1_slot5;
            var2 = _closure1_slot2;
            var1 = {};
            var10 = _closure2_slot0;
            var4 = var10.informationContentContainer;
            var1.style = var4;
            var7 = _closure1_slot4;
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 9;
            var4 = var9[var5];
            var0 = undefined;
            var4 = var6.bind(var0)(var4);
            var11 = var4.Text;
            var4 = {
                'style': null,
                'variant': 'text-md/medium',
                'color': 'text-default',
                'children': '•'
            };
            var12 = var10.informationContent;
            var4.style = var12;
            var11 = var7.bind(var0)(var11, var4);
            var4 = new Array(2);
            var4[0] = var11;
            var5 = var9[var5];
            var5 = var6.bind(var0)(var5);
            var6 = var5.Text;
            var5 = {
                'style': null,
                'variant': 'text-md/medium',
                'color': 'text-default'
            };
            var11 = var10.informationContent;
            var9 = new Array(2);
            var9[0] = var11;
            var10 = var10.informationContentDescription;
            var9[1] = var10;
            var5.style = var9;
            var8 = var8.description;
            var5.children = var8;
            var5 = var7.bind(var0)(var6, var5);
            var4[1] = var5;
            var1.children = var4;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var5.renderItem = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var1 = function(arg0) { // Environment: var1
        var2 = _closure1_slot7;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        var1 = var0.length;
        var0 = 0;
        var0 = var1 > var0;
        return var0;
    };
    var2.doesStickerPackHavePopoutInformation = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 4638, 3952, 1234, 3895, 4858, 4832, 2]);